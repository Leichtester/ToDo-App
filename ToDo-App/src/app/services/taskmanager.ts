import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Taskmanager {
  tasks = signal<string[]>([]);

  addTask(task: string) {
    this.tasks.set([...this.tasks(), task])
  }

  removeTask(task: string) {
    let dummy: string[] = this.tasks();
    dummy = dummy.filter(current => current !== task);
    this.tasks.set(dummy);
  }
}
