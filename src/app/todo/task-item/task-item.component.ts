import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;

  @Output() onEditTask = new EventEmitter<object>();
  @Output() onRemoveTask = new EventEmitter<number>();

  ngOnInit() {}

  isEdit: boolean = false;
  previousValue: string;

  toggleEdit = () => (this.isEdit = !this.isEdit);

  savePreviousValue = (value: string) => (this.previousValue = value);

  editTask() {
    this.toggleEdit();
    const {
      index,
      task: { title },
      previousValue,
    } = this;
    this.onEditTask.emit({ index, title, previousValue });
  }

  removeTask = (index: number) => this.onRemoveTask.emit(index);
}
