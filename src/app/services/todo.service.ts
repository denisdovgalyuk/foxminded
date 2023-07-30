import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({ providedIn: 'root' })

export class TodoService {
  public todos: Todo[] = [
    {
      id: 1,
      text: 'Find a book'
    },
    {
      id: 2,
      text: 'Make pizza on Saturday'
    }
  ]

  addTodoItem(text: string) {
    const newId = this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 0;
    this.todos = [{ id: newId, text }, ...this.todos];
  }

  editTodoItem(editedTodo: Todo) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === editedTodo.id) {
        return editedTodo
      }

      return todo
    })
  }

  removeTodoItem(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
