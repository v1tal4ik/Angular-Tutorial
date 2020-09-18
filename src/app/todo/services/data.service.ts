import { Injectable } from '@angular/core';
import { HISTORY1, HISTORY2, TODO } from 'src/assets/tableNames';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  todo: Array<Task> = [];
  history1: Array<Task> = [];
  history2: Array<Task> = [];
  loadedTasks: Array<Task> = [];

  // GET
  getTasks = (type: string) => this[type];

  // SET
  setLoadedTask(arr: Array<Task>) {
    this.loadedTasks = [...arr];
  }

  setNewTask(tableName: string, data: Task) {
    this[tableName].unshift(data);
  }

  setLoadedTasks() {
    const newTasks = this.loadedTasks.splice(0, 5);
    this.todo.unshift(...newTasks);
  }

  // EDIT
  editTask(tableName, index, title, previousValue) {
    let nextTable: string;
    switch (tableName) {
      case TODO:
        nextTable = HISTORY1;
        break;
      case HISTORY1:
        nextTable = HISTORY2;
        break;
      default:
        break;
    }

    const oldVersionTask = this[tableName][index];
    this.removeTask(tableName, index);
    this.setNewTask(nextTable, {
      title,
      [nextTable]: previousValue,
      ...oldVersionTask,
    });
  }

  // DEELETE
  removeTask(tableName: string, index: number) {
    this[tableName].splice(index, 1);
  }
}
