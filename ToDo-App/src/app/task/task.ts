import { Component, Input } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  @Input() taskName: string = "This is a new task!";

  constructor(private taskmanager: Taskmanager) {}

  remove() {
    this.taskmanager.removeTask(this.taskName)
  }
  
}
