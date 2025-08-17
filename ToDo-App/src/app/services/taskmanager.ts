import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface taskObject {
  name: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Taskmanager {
  tasks = signal<Map<string, taskObject>>(new Map())

  addTask(task: string) {
    let dummy = this.tasks();
    dummy.set(task, {name: task, status: false});
    this.tasks.set(dummy);
  }

  removeTask(task: string) {
    let dummy = this.tasks();
    dummy.delete(task);
    this.tasks.set(dummy);
  }

  clearAllTasks() {
    this.tasks().clear();
  }

  saveToFile() {
  }
}
