import { Component, effect, OnInit, ViewChild } from '@angular/core';
import { Task } from './../task/task';
import { Taskmanager, taskObject } from '../services/taskmanager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Thememanager } from '../services/thememanager';

@Component({
  selector: 'app-body',
  imports: [Task, CommonModule, FormsModule, MatButtonModule, MatInputModule, MatExpansionModule, MatIconModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body implements OnInit {
  @ViewChild('panel') panel!: any;

  tasks: Map<string, taskObject> = new Map<string, taskObject>
  name: string = '';
  task: string = '';

  spin = false;

  constructor(private taskManager: Taskmanager, private thememanager: Thememanager) {


    effect(() => {
      this.tasks = taskManager.tasks();
    })
  }

  ngOnInit(): void {
    this.taskManager.loadData();
    this.thememanager.changeTheme('azure');
  }

  add() {
    this.taskManager.addTask(this.name, this.task);
    this.name = '';
    this.task = '';
    this.panel.close();
  }

  

  get taskArray() {
    return Array.from(this.tasks.entries());
  }

  triggerSpin() {
    this.spin = false;
    void this.spin;
    setTimeout(() => this.spin = true, 0)
  }

  openPanel() {
    this.panel.open();
  }

}
