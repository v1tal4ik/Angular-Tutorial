import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: string;
  @Input() index: string;

  @Output() onChangeItem = new EventEmitter<object>();
  @Output() onRemoveItem = new EventEmitter<string>();

  isEdit: boolean = false;

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  removeItem(index) {
    this.onRemoveItem.emit(index);
  }
}
