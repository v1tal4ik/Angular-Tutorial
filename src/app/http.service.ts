import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  fetchNewTask() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
