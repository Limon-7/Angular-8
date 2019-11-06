import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
