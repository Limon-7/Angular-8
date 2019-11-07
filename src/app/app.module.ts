import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingnupFormComponent } from './singnup-form/singnup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent,
    ContactFormComponent,
    SingnupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
