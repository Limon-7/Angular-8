import { BadInput } from './../common/bad-input';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'util';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { DataService } from './data.service';


@Injectable()
export class PostService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
