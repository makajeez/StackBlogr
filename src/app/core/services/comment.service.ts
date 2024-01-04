import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../models/post-data';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = "https://dummyapi.io/data/v1/";

  constructor(private http: HttpClient) { }

  getComments(page: number = 1, limit: number = 10): Observable<IUser[]>{
    return this.http.get(`${this.baseUrl}comment`)
      .pipe(
        map((response: any) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
    );
  }

  

  
}
