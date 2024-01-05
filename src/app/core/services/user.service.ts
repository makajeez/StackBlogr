import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../models/post-data';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<IUser> {
    return this.http.get(`${this.baseUrl}user/${id}`)
    .pipe(map((response: any) => response),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }

  getUsers(page: number = 1, limit: number = 10): Observable<IUser[]>{
    return this.http.get(`${this.baseUrl}user`)
      .pipe(
        map((response: any) => response),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
    );
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post(`${this.baseUrl}user/create`, user).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put(`${this.baseUrl}user/${user.id}`, user).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete(`${this.baseUrl}user/${id}`).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
