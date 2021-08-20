import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/feature/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input()
  tasks: TaskModel[] = [];

  @Input()
  viewAllTasks = false;

  constructor() {}

  ngOnInit(): void {}
}
