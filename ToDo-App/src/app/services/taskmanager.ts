import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import * as uuid from 'uuid';

export interface taskObject {
  name: string;
  status: boolean;
}

export interface fileObject {
  uuid: string;
  name: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Taskmanager {
  tasks = signal<Map<string, taskObject>>(new Map());

  addTask(task: string) {
    const newUUID: string = uuid.v4();
    let dummy = this.tasks();
    dummy.set(newUUID, {name: task, status: false});
    this.tasks.set(dummy);
  }

  removeTask(taskUUID: string) {
    let dummy = this.tasks();
    dummy.delete(taskUUID);
    this.tasks.set(dummy);
  }

  clearAllTasks() {
    this.tasks().clear();
  }

  toggleStatus(taskUUID: string) {
    const dummy = this.tasks();
    const task = dummy.get(taskUUID);
    if(task) {
      task.status = !task.status;
      this.tasks.set(dummy);
    }
  }

  saveToFile() {
    const dummy: Map<string, taskObject> = this.tasks();
    dummy.forEach((value, key) => {
      const JSONObj = {uuid: key, name: value.name, status: value.status};
      const objString = JSON.stringify(JSONObj);
      console.log(objString);
      const blob = new Blob([objString], {type: 'application/json'});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();

      window.URL.revokeObjectURL(url);
    });
  }

  saveData() {
    localStorage.setItem('todos', JSON.stringify(this.tasks()));
  }

  loadData() {
    const save = localStorage.getItem('todos');
    const json = JSON.parse(save);
    let dummy: Map<string, taskObject> = new Map<string, taskObject>();
    json.
    this.todos.set()
  }
  }
}