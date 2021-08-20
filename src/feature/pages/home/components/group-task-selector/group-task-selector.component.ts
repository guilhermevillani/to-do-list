import { NewGroupTaskPopupComponent } from './../new-group-task-popup/new-group-task-popup.component';
import { TaskGroupModel } from 'src/feature/models/task-group';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-group-task-selector',
  templateUrl: './group-task-selector.component.html',
  styleUrls: ['./group-task-selector.component.scss'],
})
export class GroupTaskSelectorComponent implements OnInit {
  @Input()
  taskGroups: TaskGroupModel[] = [];

  @Output()
  onSelected = new EventEmitter<boolean>();

  selectedTaskGroup?: TaskGroupModel | null;
  taskSelectorVisibility = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.selectedTaskGroup = this.taskGroups.find((tg) => tg.selected);
  }

  toggleTaskSelectorVisibility() {
    this.taskSelectorVisibility = !this.taskSelectorVisibility;
  }

  selectTaskGroup(taskGroup: TaskGroupModel) {
    this.taskGroups.forEach((tg) => {
      tg.selected = false;
    });
    taskGroup.selected = true;
    this.selectedTaskGroup = taskGroup;
    this.toggleTaskSelectorVisibility();
    this.onSelected.emit(false);
  }
  selectViewAllTasks() {
    this.taskGroups.forEach((tg) => {
      tg.selected = false;
    });
    this.toggleTaskSelectorVisibility();
    this.selectedTaskGroup = null;
    this.onSelected.emit(true);
  }

  openNewGroupTaskPopUp() {
    this.dialog.open(NewGroupTaskPopupComponent);
  }
}
