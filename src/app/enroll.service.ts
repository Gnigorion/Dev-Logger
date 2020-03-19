import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  enroll(user: User): Observable<User> {
    console.log('In service', user);
    return this.http.post<User>(this.url + 'enroll', user);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url + 'dashboard/post');
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url + 'dashboard');
  }
}
