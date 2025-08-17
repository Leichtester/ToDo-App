import { Component } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private taskmanager: Taskmanager) {}

  upload() {

  }

  download() {

  }

  clearAll() {
    const confirm = window.confirm('Are you sure you want to delete all tasks?');
    if(confirm) {
      this.taskmanager.clearAllTasks();
    }
  }

  menu() {

  }
}
