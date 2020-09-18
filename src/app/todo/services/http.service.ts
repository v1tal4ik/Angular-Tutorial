import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';
import { Task } from '../model/task.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private DataService: DataService) {}

  fetchTask() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((data: Array<Task>) => data.map(({ title }) => ({ title }))))
      .subscribe((data) => this.DataService.setLoadedTask(data));
  }
}
