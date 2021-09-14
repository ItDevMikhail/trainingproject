import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLibraryComponent } from './book-library/book-library.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  { path: 'library', component: BookLibraryComponent},
  { path: 'detail/:id', component:  BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
