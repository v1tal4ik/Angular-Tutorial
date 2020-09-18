import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO, HISTORY1, HISTORY2 } from 'src/assets/tableNames';
import { Task } from '../model/task.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [DataService],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Input() tableName: string;

  @Output() onEditTask = new EventEmitter<object>();
  @Output() onRemoveTask = new EventEmitter<object>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getTableName = () => {
    switch (this.tableName) {
      case 'Todo':
        return TODO;
      case 'History 1':
        return HISTORY1;
      case 'History 2':
        return HISTORY2;

      default:
        return;
    }
  };

  editTask({ index, title, previousValue }) {
    this.onEditTask.emit({
      tableName: this.getTableName(),
      index,
      title,
      previousValue,
    });
  }

  removeTask(index: number) {
    this.onRemoveTask.emit({ tableName: this.getTableName(), index });
  }
}
