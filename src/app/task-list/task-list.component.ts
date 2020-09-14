import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [HttpService],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  loadedTasks: [] = [];
  response: any;
  name: string = 'Tom';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.fetchNewTask().subscribe((res) => {
      for (const i in res) {
        this.loadedTasks[i] = res[i].title;
      }
    });
  }

  ngOnDestroy() {
    this.tasks = [];
  }

  addNewItem(value: any) {
    this.tasks.unshift(value);
  }

  changeItem({ index, value }) {
    this.tasks[index] = value;
  }

  removeItem(index) {
    this.tasks.splice(index, 1);
  }

  fetchNewtask = () => {
    const newTasks = this.loadedTasks.splice(0, 5);
    this.tasks.unshift(...newTasks);
  };
}
