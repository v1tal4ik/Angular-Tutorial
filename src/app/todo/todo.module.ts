import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoComponent } from './todo.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { InputBlockComponent } from './input-block/input-block.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [
    TodoComponent,
    TaskListComponent,
    TaskItemComponent,
    InputBlockComponent,
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
