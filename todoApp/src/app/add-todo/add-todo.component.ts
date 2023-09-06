import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() newTDEvent = new EventEmitter<string>();


  addNewTD(value: string) {
    if (!value) {
      alert("TODO is empty!")
    }
    else {
      this.newTDEvent.emit(value);

    }
  }
}
