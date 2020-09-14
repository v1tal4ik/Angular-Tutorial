import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
})
export class InputBlockComponent {
  @Output() onAddNewItem = new EventEmitter<string>();
  @Output() onFetchNewTask = new EventEmitter<string>();
  value: string = '';

  createNewItem = () => {
    if (this.value) {
      this.onAddNewItem.emit(this.value);
    }
    this.value = '';
  };

  fetchNewTask = () => {
    this.onFetchNewTask.emit();
  };
}
