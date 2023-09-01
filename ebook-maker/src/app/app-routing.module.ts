import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { AuthorVerificationComponent } from './components/admin/author-verification/author-verification.component';
import { BookVerificationComponent } from './components/admin/book-verification/book-verification.component';
import { CreateEbooksComponent } from './components/admin/create-ebooks/create-ebooks.component';
import { AdminForgotpasswordComponent } from './components/admin/admin-forgotpassword/admin-forgotpassword.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AuthorRegisterComponent } from './components/author/author-register/author-register.component';
import { AuthorLoginComponent } from './components/author/author-login/author-login.component';
import { AuthorForgotpasswordComponent } from './components/author/author-forgotpassword/author-forgotpassword.component';
import { ForgotpasswordComponent } from './components/user/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MainhomeComponent } from './components/main-home/mainhome/mainhome.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { AuthorHomeComponent } from './components/author/author-home/author-home.component';
import { ViewEbookComponent } from './components/user/view-ebook/view-ebook.component';
import { CreatebookComponent } from './components/author/createbook/createbook.component';
import { AuthorInputComponent } from './components/author/author-input/author-input.component';
import { MyBooksComponent } from './components/author/my-books/my-books.component';
import { UpdateBookComponent } from './components/author/update-book/update-book.component';
import { AdminViewEbookComponent } from './components/admin/admin-view-ebook/admin-view-ebook.component';

const routes: Routes = [
  { path: 'admin-home', component: HomeComponent },
  { path: 'author-verification', component: AuthorVerificationComponent },
  { path: 'book-verification', component: BookVerificationComponent },
  { path: 'create-ebooks', component: CreateEbooksComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-forgotpassword', component: AdminForgotpasswordComponent },
  { path: 'author-login', component: AuthorLoginComponent },
  { path: 'author-register', component: AuthorRegisterComponent },
  { path: 'author-forgotpassword', component: AuthorForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: '', component: MainhomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'author-home', component: AuthorHomeComponent },
  { path: 'view-ebook/:bookId', component: ViewEbookComponent },
  { path: 'admin-view-ebook/:bookId', component: AdminViewEbookComponent },
  { path: 'create-book', component: CreatebookComponent },
  { path: 'mybooks', component: AuthorInputComponent },
  { path: 'book-dashboard/:authorId', component: MyBooksComponent },
  { path: 'update-book', component: UpdateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
