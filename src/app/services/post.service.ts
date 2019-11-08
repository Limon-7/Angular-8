import { BadInput } from './../common/bad-input';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'util';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
  }
  getPost() {
   return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError(err => {
      if (err.status === 400) {
        throw(new BadInput(err));
      }
      throw( new AppError(err));
    }));
  }
  upDatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true})).pipe(catchError(err => this.handleError));
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError(err => this.handleError));
  }
  private handleError(err) {
    if ( err.status === 404) {
      throw(new NotFoundError());
    }
    throw(new AppError(err));
  }
}
