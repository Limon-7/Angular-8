import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Operators/catchError';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) {}
  getAll() {
    return this.http.get(this.url).catch(this.handleError);
   }
   get(id) {
    return this.http.get(this.url + '/' + id);
   }
   create(resource) {
     return this.http.post(this.url, JSON.stringify(resource));
   }
   update(resource) {
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}));
   }
   delete(id) {
     return this.http.delete(this.url + '/' + id);
   }
   private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      // tslint:disable-next-line: deprecation
      return Observable.throw(error.message || 'Server Error');
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
