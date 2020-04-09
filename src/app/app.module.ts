import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnjigeComponent } from './components/knjige/knjige.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    KnjigeComponent,
    AddBookComponent,
    HomeComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
