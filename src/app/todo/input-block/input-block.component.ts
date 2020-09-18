import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
})
export class InputBlockComponent {
  @Output() onAddNewTask = new EventEmitter<string>();
  @Output() onLoadNewTasks = new EventEmitter<string>();
  value: string = '';

  createNewTask = () => {
    if (this.value) {
      this.onAddNewTask.emit(this.value);
    }
    this.value = '';
  };

  loadNewTasks = () => {
    this.onLoadNewTasks.emit();
  };
}
