import { Component } from '@angular/core';
import { Task } from './../task/task';

@Component({
  selector: 'app-body',
  imports: [Task],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

}
