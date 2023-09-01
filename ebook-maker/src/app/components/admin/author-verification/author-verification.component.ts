import { Component } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-verification',
  templateUrl: './author-verification.component.html',
  styleUrls: ['./author-verification.component.css'],
})
export class AuthorVerificationComponent {
  unauthorizedauthors: Author[] = [];

  constructor(
    private adminService: AdminService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.getunauthorizedauthors();
  }

  private getunauthorizedauthors() {
    this.adminService.getUnauthorizedAuthorsList().subscribe((data) => {
      this.unauthorizedauthors = data;
    });
  }

  verifyAuthor(unauthorizedauthor: Author) {
    this.authorService.verifyAuthor(unauthorizedauthor.email).subscribe(
      (updatedUnauthorizedAuthors) => {
        this.unauthorizedauthors = updatedUnauthorizedAuthors;
        window.alert('Author verified successfully!');
        window.location.reload();
      },
      (error) => {
        console.error('Error verifying author:', error);
      }
    );
  }
}
