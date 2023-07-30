import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  addControl: FormControl = new FormControl(null, Validators.required);

  @Output() add: EventEmitter<string> = new EventEmitter();

  addTodoItem() {
    this.add.emit(this.addControl.value);
    this.addControl.reset();
  }
}
