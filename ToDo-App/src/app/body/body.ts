import { Component, effect, OnInit } from '@angular/core';
import { Task } from './../task/task';
import { Taskmanager, taskObject } from '../services/taskmanager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-body',
  imports: [Task, CommonModule, FormsModule, MatButtonModule, MatInputModule, MatExpansionModule, MatIconModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body implements OnInit {

  tasks: Map<string, taskObject> = new Map<string, taskObject>
  name: string = '';
  task: string = '';

  spin = false;

  constructor(private taskManager: Taskmanager) {
    effect(() => {
      this.tasks = taskManager.tasks();
    })
  }

  ngOnInit(): void {
    this.taskManager.loadData();
  }

  add() {
    this.taskManager.addTask(this.name, this.task);
    this.name = '';
    this.task = '';
  }

  

  get taskArray() {
    return Array.from(this.tasks.entries());
  }

  triggerSpin() {
    this.spin = false;
    void this.spin;
    setTimeout(() => this.spin = true, 0)
  }
}
