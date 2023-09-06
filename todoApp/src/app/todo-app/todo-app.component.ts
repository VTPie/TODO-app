import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  constructor(private toastr: ToastrService) { }

  sampleTD = [
    { id: 1, title: 'Sleep' },
    { id: 2, title: 'Eat' },
    { id: 3, title: 'Work' },
  ]
  addTD(newTitle: string) {
    let newTD = {
      id: Math.floor(Math.random() * 1001),
      title: newTitle
    }
    this.sampleTD.push(newTD)
    this.toastr.success('Added new TODO successfully.', 'Success');
  }
  deleteTD(index: number) {
    this.sampleTD.splice(index, 1)
    this.toastr.success('Deleted TODO successfully.', 'Success');
  }
}
