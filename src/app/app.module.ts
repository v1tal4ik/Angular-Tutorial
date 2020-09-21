import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
