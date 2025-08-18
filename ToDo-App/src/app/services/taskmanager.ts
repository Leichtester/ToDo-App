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

  saveToFile() {
    const dummy: Map<string, taskObject> = this.tasks();
    dummy.forEach((value, key) => 
      let JSONObj = {uuid: key, name: value.name, status: value.status};
      let objString = JSON.stringify(JSONObj);
      console.log(objString);
    });
    
  }
}
