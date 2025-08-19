import { JsonPipe } from '@angular/common';
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
    this.saveData();
  }

  removeTask(taskUUID: string) {
    let dummy = this.tasks();
    dummy.delete(taskUUID);
    this.tasks.set(dummy);
    this.saveData();
  }

  clearAllTasks() {
    this.tasks().clear();
    this.saveData();
  }

  toggleStatus(taskUUID: string) {
    const dummy = this.tasks();
    const task = dummy.get(taskUUID);
    if(task) {
      task.status = !task.status;
      this.tasks.set(dummy);
    }
    this.saveData();
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
    const obj = Object.fromEntries(this.tasks());
    const json = JSON.stringify(obj);
    localStorage.setItem('todos', json);
    console.log("Stored: ", json);
  }

  loadData() {
    const item = localStorage.getItem('todos');
    if(item) {
      const parsed: Record<string, taskObject> = JSON.parse(item);
      const dummy = new Map(Object.entries(parsed));
      this.tasks.set(dummy);
      console.log("Restored map: " + dummy);
    }else {console.log('No localStorage items found.')}
  }
}