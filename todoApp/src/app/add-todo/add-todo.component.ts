import { Component, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() newTDEvent = new EventEmitter<string>();
  constructor(private toastr: ToastrService) { }


  addNewTD(value: string) {
    if (!value) {
      this.toastr.error('Input cannot be empty.', 'Error');
    }
    else {
      this.newTDEvent.emit(value);
    }
  }
}
