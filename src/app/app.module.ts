import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './screens/todo/todo.component';
import { AttachedFilesComponent } from './screens/attached-files/attached-files.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { EditTodoComponent } from './components/todo/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AttachedFilesComponent,
    HeaderComponent,
    AddTodoComponent,
    TodoListComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
