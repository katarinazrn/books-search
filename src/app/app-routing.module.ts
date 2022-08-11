import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MyBooksComponent } from './my-books/my-books/my-books.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: SearchComponent },
  { path: 'authors', component: SearchComponent },
  { path: 'books/:type/:key', component: BookDetailsComponent },
  { path: 'authors/:key', component: AuthorDetailsComponent },
  { path: 'my-books', component: MyBooksComponent },
  { path: '**', redirectTo: '/search/books' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
