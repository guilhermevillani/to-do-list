import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/feature/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: TaskModel = {   
    group: '',
    title: '',
    completed: false,
  };

  @Input()
  showGroupName = false;

  constructor() {}

  ngOnInit(): void {}

  completeTask() {
    this.task.completed = true;
  }
  unCheckTask() {
    this.task.completed = false;
  }
}
