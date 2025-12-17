import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IComment, IUser } from '../models/post-data';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = environment.baseUrl;
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('app-id', environment.apiId);
  }

  getComments(page: number = 1, limit: number = 50): Observable<IUser[]>{
    return this.http.get(`${this.baseUrl}comment`, {headers: this.headers})
      .pipe(
        map((response: any) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
    );
  }
 getCommentsbyPost(id: string, page: number = 1, limit: number = 50): Observable<IComment[]> { 
  return this.http.get(`${this.baseUrl}post/${id}/comment`, {headers: this.headers})
      .pipe(
        map((response: any) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
    );
  }
  

  
}
