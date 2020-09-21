import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, TodoModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
