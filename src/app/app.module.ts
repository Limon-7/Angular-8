import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { FavouriteComponent } from './favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    EventFilteringComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
