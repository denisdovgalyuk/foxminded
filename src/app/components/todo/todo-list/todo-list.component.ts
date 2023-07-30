import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() list!: Todo[];

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  editableTodo?: Todo;

  selectEditableListItem(todo: Todo) {
    this.editableTodo = todo;
  }

  editListItem(todo: Todo) {
    if (!todo.text) this.remove.emit(todo.id);

    this.edit.emit(todo);
    this.editableTodo = undefined;
  }

  removeListItem(id: number) {
    this.remove.emit(id);
  }
}
