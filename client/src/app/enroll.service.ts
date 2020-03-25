import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http: HttpClient) { }



  getProject(): Observable<any> {
    return this.http.get<any>('dashboard/project');
  }

  getPosts(): Observable<any> {
    return this.http.get<any>('dashboard/report');
  }
}
