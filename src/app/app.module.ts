import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingnupFormComponent } from './singnup-form/singnup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileService } from './services/github-profile.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent,
    ContactFormComponent,
    SingnupFormComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    GithubProfileComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    PostService,
    GithubProfileService,
    { provide: ErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
