import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Taskmanager } from '../services/taskmanager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  isChecked: boolean = false;

  @Input() taskName!: string;
  @Input() uuid!: string;
  @Input() isActive!: boolean;

  @Output() isActiveChanged = new EventEmitter<boolean>();

  constructor(private taskmanager: Taskmanager) {}

  remove() {
    this.taskmanager.removeTask(this.uuid)
  }

  checkbox() {
    this.taskmanager.toggleStatus(this.uuid);
  }
}
