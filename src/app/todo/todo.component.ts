import { Component, OnInit } from '@angular/core';
import { HISTORY1, HISTORY2, TODO } from 'src/assets/tableNames';
import { Task } from './model/task.model';
import { DataService } from './services/data.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [HttpService, DataService],
})
export class TodoComponent implements OnInit {
  tasks: Array<Task>;
  historyOneTasks: Array<Task>;
  historySecondTasks: Array<Task>;

  constructor(
    private httpService: HttpService,
    private dataService: DataService
  ) {
    this.tasks = this.dataService.getTasks(TODO);
    this.historyOneTasks = this.dataService.getTasks(HISTORY1);
    this.historySecondTasks = this.dataService.getTasks(HISTORY2);
  }

  ngOnInit() {
    this.httpService.fetchTask();
  }

  addNewTask(title: string) {
    this.dataService.setNewTask(TODO, { title });
  }

  loadNewTasks() {
    this.dataService.setLoadedTasks();
  }

  editTask({ tableName, index, title, previousValue }) {
    this.dataService.editTask(tableName, index, title, previousValue);
  }

  removeTask({ tableName, index }) {
    this.dataService.removeTask(tableName, index);
  }
}
