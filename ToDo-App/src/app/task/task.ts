import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Body } from '../body/body';

@Component({
  selector: 'app-task',
  imports: [FormsModule, MatIconModule, MatCheckboxModule, MatCardModule, MatButtonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  isChecked: boolean = false;

  @Input() taskName!: string;
  @Input() taskContent!: string;
  @Input() uuid!: string;
  @Input() isActive!: boolean;

  @Output() isActiveChanged = new EventEmitter<boolean>();

  constructor(private taskmanager: Taskmanager, private body: Body) {}

  remove() {
    this.taskmanager.removeTask(this.uuid)
  }

  checkbox() {
    this.taskmanager.toggleStatus(this.uuid);
  }

  edit() {
    this.body.name = this.taskName;
    this.body.task = this.taskContent;
    this.body.openPanel();
    this.taskmanager.removeTask(this.uuid);
  }
}
