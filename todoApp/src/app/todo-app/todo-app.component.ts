import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
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
  }
  deleteTD(index: number) {
    this.sampleTD.splice(index, 1)
  }
}
