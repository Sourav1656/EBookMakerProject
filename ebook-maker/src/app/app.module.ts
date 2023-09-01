import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { HomeComponent } from './components/admin/home/home.component';
import { AuthorVerificationComponent } from './components/admin/author-verification/author-verification.component';
import { BookVerificationComponent } from './components/admin/book-verification/book-verification.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEbooksComponent } from './components/admin/create-ebooks/create-ebooks.component';
import { AdminForgotpasswordComponent } from './components/admin/admin-forgotpassword/admin-forgotpassword.component';
import { AuthorRegisterComponent } from './components/author/author-register/author-register.component';
import { AuthorLoginComponent } from './components/author/author-login/author-login.component';
import { AuthorForgotpasswordComponent } from './components/author/author-forgotpassword/author-forgotpassword.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ForgotpasswordComponent } from './components/user/forgotpassword/forgotpassword.component';
import { MainhomeComponent } from './components/main-home/mainhome/mainhome.component';
import { MainheaderComponent } from './components/main-home/mainheader/mainheader.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { AuthorHomeComponent } from './components/author/author-home/author-home.component';
import { AuthorHeaderComponent } from './components/author/author-header/author-header.component';
import { ViewEbookComponent } from './components/user/view-ebook/view-ebook.component';
import { CreatebookComponent } from './components/author/createbook/createbook.component';
import { AuthorInputComponent } from './components/author/author-input/author-input.component';
import { MyBooksComponent } from './components/author/my-books/my-books.component';
import { UpdateBookComponent } from './components/author/update-book/update-book.component';
import { AdminViewEbookComponent } from './components/admin/admin-view-ebook/admin-view-ebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthorVerificationComponent,
    BookVerificationComponent,
    AdminLoginComponent,
    CreateEbooksComponent,
    AdminForgotpasswordComponent,
    AuthorRegisterComponent,
    AuthorLoginComponent,
    AuthorForgotpasswordComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    MainhomeComponent,
    MainheaderComponent,
    UserHomeComponent,
    UserHeaderComponent,
    AuthorHomeComponent,
    AuthorHeaderComponent,
    ViewEbookComponent,
    CreatebookComponent,
    AuthorInputComponent,
    MyBooksComponent,
    UpdateBookComponent,
    AdminViewEbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
