import { Component, Input } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  isChecked: boolean = false;

  @Input() taskName: string = "This is a new task!";
  @Input() uuid: string = '';

  constructor(private taskmanager: Taskmanager) {}

  remove() {
    this.taskmanager.removeTask(this.uuid)
  }

  checkbox() {
    let dummy = this.taskmanager.tasks();
    let task = dummy.get(this.uuid);
    if(task != undefined) {
      task.status = this.isChecked;
      this.taskmanager.tasks.set(dummy);
    }
  }
  
}
