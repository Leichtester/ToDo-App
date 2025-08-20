import { Component } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private taskmanager: Taskmanager) {}

  upload() {
    this.taskmanager.loadData();
  }

  download() {
    this.taskmanager.saveToFile();
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
