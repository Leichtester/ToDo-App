import { Component, effect } from '@angular/core';
import { Task } from './../task/task';
import { Taskmanager } from '../services/taskmanager';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [Task, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

  tasks: string[] = [];

  constructor(private taskManager: Taskmanager) {
    effect(() => {
      this.tasks = taskManager.tasks();
    })
  }

  add() {
    this.taskManager.addTask('test');
  }
}
