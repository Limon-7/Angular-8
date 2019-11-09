import { BadInput } from './../common/bad-input';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { error } from 'util';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


@Injectable()
export class DataService {
  // private url
  constructor(private url: string, private http: HttpClient) {
  }
  getAll() {
   return this.http.get(this.url).pipe (
    map(response => response),
    catchError(err => this.handleError)
    );
  }
  getId(id) {
    return this.http.get(this.url + '/' + id).pipe(
      map(response => response),
      catchError(err => this.handleError)
    );
  }
  create(resource) {
    // throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
    map(response => response) ,
    catchError(err => this.handleError)
    );
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true})).pipe(
      map(response => response),
     catchError(err => this.handleError)
    );
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      map(response => response) ,
      catchError(err => this.handleError)
    );
  }
  private handleError(err) {
    if (err.status === 400) {
      throw(new BadInput(err));
    }
    if ( err.status === 404) {
      throw(new NotFoundError());
    }
    throw(new AppError(err));
  }
}
