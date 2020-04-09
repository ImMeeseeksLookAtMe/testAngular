import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { KnjigeComponent } from './components/knjige/knjige.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'book', component: KnjigeComponent},
  {path: 'book/:id', component: BookComponent}
  //avtorji

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
