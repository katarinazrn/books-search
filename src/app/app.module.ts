import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';
import { SearchComponent } from './search/search/search.component';
import { BookListItemComponent } from './search/book-list-item/book-list-item.component';
import { LoadingComponent } from './loading/loading.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { OptionsComponent } from './search/options/options.component';
import { AuthorListItemComponent } from './search/author-list-item/author-list-item.component';
import { MyBooksComponent } from './my-books/my-books/my-books.component';
import { MyBooksItemComponent } from './my-books/my-books-item/my-books-item.component';
import { ButtonComponent } from './my-books/button/button.component';
import { PaginationComponent } from './search/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    SearchResultListComponent,
    SearchComponent,
    BookListItemComponent,
    LoadingComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    OptionsComponent,
    AuthorListItemComponent,
    MyBooksComponent,
    MyBooksItemComponent,
    ButtonComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
