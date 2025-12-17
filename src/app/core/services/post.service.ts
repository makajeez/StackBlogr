import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostData, ReturnedData } from '../models/post-data';
import { environment } from '../../../environments/environment.development';
import { SkipLoading } from '../../shared/loading-indicator/loading-interceptor';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = environment.baseUrl;
  headers: HttpHeaders = new HttpHeaders();
  
  constructor(private _http: HttpClient) { 
    this.headers = this.headers.append('app-id', environment.apiId);
  }

  getPost(id: string, page: number = 1, limit: number = 10): Observable<PostData> {
    return this._http.get(`${this.baseUrl}post/${id}?page=${page}&limit=${limit}`, {headers: this.headers})
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
  
  getPosts(page: number = 1, limit: number = 10): Observable<ReturnedData> {
    return this._http.get(`${this.baseUrl}post?page=${page}&limit=${limit}`, {headers: this.headers})
    .pipe(map((response: any) => {
      console.log('Fetched Posts:', response)
      return response;
    }),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  getPostsByUser(id: string, page: number = 1, limit: number = 10): Observable<ReturnedData> {
    return this._http.get(`${this.baseUrl}user/${id}/post?page=${page}&limit=${limit}`, {headers: this.headers})
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  getPostsByTag(id: string, page: number = 1, limit: number = 10): Observable<ReturnedData> {
    return this._http.get(`${this.baseUrl}tag/${id}/post?page=${page}&limit=${limit}`, {headers: this.headers})
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  createPost(post: PostData): Observable<ReturnedData> {
    return this._http.post(`${this.baseUrl}post/create`, post, {headers: this.headers}).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  updatePost(id: string, post: PostData): Observable<ReturnedData> {
    return this._http.put(`${this.baseUrl}post/${id}`, post, 
      { //to skip loading indicator for this http request
        headers: this.headers,
        context: new HttpContext().set(SkipLoading, true),
      }
    )
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  deletePost(id: string): Observable<ReturnedData> {
    return this._http.delete(`${this.baseUrl}post/${id}`, {headers: this.headers}).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}

