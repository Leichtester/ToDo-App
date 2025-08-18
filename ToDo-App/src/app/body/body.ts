import { Component, effect } from '@angular/core';
import { Task } from './../task/task';
import { Taskmanager, taskObject } from '../services/taskmanager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [Task, CommonModule, FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

  tasks: Map<string, taskObject> = new Map<string, taskObject>
  name: string = '';

  constructor(private taskManager: Taskmanager) {
    effect(() => {
      this.tasks = taskManager.tasks();
    })
  }

  add() {
    this.taskManager.addTask(this.name);
  }

  

  get taskArray() {
    return Array.from(this.tasks.entries());
  }
}
