import { Component } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { Thememanager } from '../services/thememanager';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatExpansionModule, MatInputModule, FormsModule, MatMenuModule, MatRadioModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  name: string = '';
  task: string = '';

  selectedOption = '1';

  constructor(private taskmanager: Taskmanager, public thememanager: Thememanager) {}

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
  
  link() {
    window.open('https://github.com/Leichtester/ToDo-App/tree/main', '_blank');
  }
}
