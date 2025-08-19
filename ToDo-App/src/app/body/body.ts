import { Component, effect, OnInit } from '@angular/core';
import { Task } from './../task/task';
import { Taskmanager, taskObject } from '../services/taskmanager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-body',
  imports: [Task, CommonModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body implements OnInit {

  tasks: Map<string, taskObject> = new Map<string, taskObject>
  name: string = '';

  constructor(private taskManager: Taskmanager) {
    effect(() => {
      this.tasks = taskManager.tasks();
    })
  }

  ngOnInit(): void {
    this.taskManager.loadData();
  }

  add() {
    this.taskManager.addTask(this.name);
  }

  

  get taskArray() {
    return Array.from(this.tasks.entries());
  }
}
