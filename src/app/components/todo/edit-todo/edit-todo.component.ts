import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../interfaces/todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  @Input() todo?: Todo;

  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  public editControl = new FormControl('');

  ngOnInit() {
    this.editControl.setValue(this.todo?.text || '')
  }

  editTodoItem() {
    this.edit.emit({
      id: this.todo?.id as number,
      text: this.editControl.value || ''
    })
  }
}
