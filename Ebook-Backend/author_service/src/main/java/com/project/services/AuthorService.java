package com.project.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.project.dto.AuthorDTO;
import com.project.dto.BookDto;
import com.project.dto.LoginDTO;
import com.project.exceptions.AuthorAlreadyExists;
import com.project.exceptions.AuthorNotAuthorized;
import com.project.exceptions.AuthorNotFound;
import com.project.exceptions.BookIsEmpty;
import com.project.exceptions.InvalidCredentials;
import com.project.model.Author;
import com.project.repository.AuthorRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@AllArgsConstructor
@Log4j2
public class AuthorService {

	AuthorRepository authrepo;
	PasswordEncoder passEncoder;
	ModelMapper modelmapper;
	WebClient.Builder webclient;

	public AuthorDTO getAuthorByID(String id) throws AuthorNotFound {

		Optional<Author> author = authrepo.findById(id);
		if (author.isEmpty()) {
			log.warn("Author with this id doesn't exist");
			throw new AuthorNotFound("Author Doesn't exist");
		}
		log.info("Author with this id have been found");
		return modelmapper.map(author.get(), AuthorDTO.class);
	}

	public String registerAuthor(AuthorDTO authordto) throws AuthorAlreadyExists {

		Author author = modelmapper.map(authordto, Author.class);
		author.setPassword(passEncoder.encode(author.getPassword()));
		if (authrepo.existsById(author.getEmail())) {
			log.warn("Author with "+author.getEmail()+" already exists");
			throw new AuthorAlreadyExists("Author Already exists");
		}
		authrepo.save(author);
		log.info("Author with "+author.getEmail()+" registered successfully");
		return "Author Registered Successfully";

	}

	public List<AuthorDTO> getAllAuthors() {

		List<Author> author = (List<Author>) authrepo.findAll();
		log.info("List of all authors found");
		return author.stream().map(x -> modelmapper.map(x, AuthorDTO.class)).toList();

	}

	public String deleteAuthor(String id) throws AuthorNotFound {

		if (authrepo.existsById(id)) {
			authrepo.deleteById(id);
			log.info("Author deleted successfully");
			return "Author deleted successfully";
		}
		log.warn("Author doesn't exist with this id");
		throw new AuthorNotFound("Author doesn't exists of given id");

	}

	public AuthorDTO updateAuthor(AuthorDTO author) throws AuthorNotFound {
		author.setPassword(passEncoder.encode(author.getPassword()));
		if (!authrepo.existsById(author.getEmail())) {
			log.warn("Author with email " + author.getEmail() + " is not found.");
			throw new AuthorNotFound("Author not found");
		}
		authrepo.save(modelmapper.map(author, Author.class));
		log.info("Author with email " + author.getEmail() + " updated successfully");
		return modelmapper.map(authrepo.findById(author.getEmail()).get(), AuthorDTO.class);

	}

	public String validateAuthor(String id) throws AuthorNotFound {
		if (authrepo.existsById(id)) {
			Author author = authrepo.findById(id).get();
			author.setAuthorised(true);
			authrepo.save(author);
			log.info("Author is validated successfully");
			return "User Authorized";
		}
		log.warn("Author doesn't exists");
		throw new AuthorNotFound("Author does not exist");
	}

	public List<AuthorDTO> unauthorizedAuthors() {
		log.info("List of all unauthorised authors");
		return authrepo.findAll().stream().filter(author -> author.isAuthorised() == false)
				.map(auth -> modelmapper.map(auth, AuthorDTO.class)).toList();
	}

	public String addBook(BookDto bookdto) throws AuthorNotAuthorized {

		Optional<Author> author = authrepo.findById(bookdto.getAuthorId());
		if (author.isPresent()&& author.get().isAuthorised()) {
			bookdto.setAuthorId(author.get().getEmail());
			bookdto.setAuthorName(author.get().getAuthorname());
			log.info("Book Added Successfully");
			return webclient.build().post().uri("http://localhost:8093/api/book/createbook").bodyValue(bookdto).retrieve()
					.bodyToMono(String.class).block();
		}
		log.warn("Author either doesn't exists or is not yet authorised to add book");
		throw new AuthorNotAuthorized("author does not exists or is not yet authorized");

	}

	public String setBookComplete(String bookid) throws BookIsEmpty {
		
		Boolean bookcontentisvalid=webclient.build().get().uri("http://localhost:8094/api/bookcontent/validcontent/" + bookid).retrieve()
				.bodyToMono(Boolean.class).block();
		if(bookcontentisvalid) {
			log.info("Book is completed susccessfully");
		return webclient.build().get().uri("http://localhost:8093/api/book/setcomplete/" + bookid).retrieve()
				.bodyToMono(String.class).block();
		}
		log.warn("Book is empty or incompleted");
		throw new BookIsEmpty(bookid);
	}

	public List<BookDto> getAuhtorBooks(String id) {
		log.info("List of all the books");
		return webclient.build().get().uri("http://localhost:8093/api/book/getbyauthid/" + id).retrieve()
				.bodyToMono(new ParameterizedTypeReference<List<BookDto>>() {
				}).block();
	}

	public String login(LoginDTO logindto) throws InvalidCredentials {
		Optional<Author> author =authrepo.findById(logindto.getEmail());
		if (author.isPresent() && passEncoder.matches(logindto.getPassword(), author.get().getPassword())) {
			log.info("Login successfull");
            HashMap<String, Object> token= webclient.build().post()
                    .uri("http://localhost:8080/realms/api-gateway-realm/protocol/openid-connect/token")
                    .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                    .body(BodyInserters.fromFormData("grant_type", "password").with("client_id", "user_api")
                            .with("username", "user").with("password", "user01"))
                    .retrieve().bodyToMono(new ParameterizedTypeReference<HashMap<String, Object>>() {
					}).block();
            
            
           return (String) token.get("access_token");
            

        }
		log.warn("Invalid credentials or user does not exists");
        throw new InvalidCredentials("Invalid credentials or user does not exists");
	}

}

