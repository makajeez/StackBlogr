import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostData } from '../models/post-data';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "https://dummyapi.io/data/v1/";

  constructor(private http: HttpClient) { }

  getPost(id: number, page: number = 1, limit: number = 10): Observable<PostData> {
    return this.http.get(`${this.baseUrl}post/${id}?page=${page}&limit=${limit}`)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
  
  getPosts(page: number = 1, limit: number = 10): Observable<PostData> {
    return this.http.get(`${this.baseUrl}post?page=${page}&limit=${limit}`)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  getPostsByUser(id: number, page: number = 1, limit: number = 10): Observable<PostData> {
    return this.http.get(`${this.baseUrl}user/${id}/post?page=${page}&limit=${limit}`)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  getPostsByTag(id: number, page: number = 1, limit: number = 10): Observable<PostData> {
    return this.http.get(`${this.baseUrl}tag/${id}/post?page=${page}&limit=${limit}`)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  createPost(post: PostData): Observable<PostData> {
    return this.http.post(`${this.baseUrl}post/create`, post).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  updatePost(id: number, post: PostData): Observable<PostData> {
    return this.http.put(`${this.baseUrl}post/${id}`, post)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  deleteUser(id: number): Observable<PostData> {
    return this.http.delete(`${this.baseUrl}post/${id}`).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}

