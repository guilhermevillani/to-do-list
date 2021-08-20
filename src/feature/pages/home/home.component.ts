import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskModel } from 'src/feature/models/task';
import { TaskGroupModel } from 'src/feature/models/task-group';
import { TaskService } from 'src/feature/services/task.service';

export type OptionType = 'completed' | 'pending' | 'all';

export interface ViewOption {
  optionType: OptionType;
  name: string;
  selected: boolean;
  onFilter: (tasks: TaskModel[]) => TaskModel[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  taskName = new FormControl('');
  taskCreator = false;
  taskOptions = false;
  viewAllTasks = true;

  taskGroups: TaskGroupModel[] = [];

  tasksView: TaskModel[] = [];

  viewOptions: ViewOption[] = [
    {
      optionType: 'pending',
      name: 'Tarefas Pendentes',
      selected: true,
      onFilter: (tasks: TaskModel[]) => tasks.filter((tv) => !tv.completed),
    },
    {
      optionType: 'completed',
      name: 'Tarefas Completas',
      selected: false,
      onFilter: (tasks: TaskModel[]) => tasks.filter((tv) => tv.completed),
    },
    {
      optionType: 'all',
      name: 'Todas Tarefas',
      selected: false,
      onFilter: (tasks: TaskModel[]) => tasks,
    },
  ];

  constructor(private taskService: TaskService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.taskGroups = data;
      this.tasksView = this.allTasks;
    });
  }

  openCreateTask() {
    this.taskCreator = true;
    this.taskOptions = false;
  }

  closeTaskCreator() {
    this.taskName.reset();
    this.taskCreator = false;
  }

  createTask() {
    const newTask: TaskModel = {
      title: this.taskName.value,
      completed: false,
      group: this.taskGroupSelected?.name ?? '',
    };
    this.taskService
      .createTask(this.taskGroupSelected?.id ?? 1, [
        ...(this.taskGroupSelected?.tasks ?? []),
        newTask,
      ])
      .subscribe((taskGroupUpdated: TaskGroupModel) => {
        console.log('Tarefa criada');
        if (this.taskGroupSelected) {
          this.taskGroupSelected.tasks = taskGroupUpdated.tasks;
          this.tasksView = this.taskGroupSelected?.tasks ?? [];
        }
      });
    this.closeTaskCreator();
  }

  toggleTaskOptionsView() {
    this.taskOptions = !this.taskOptions;
  }

  selectTaskOption(optionType: OptionType) {
    const viewOption = this.viewOptions.find(
      (vo) => vo.optionType === optionType
    );
    if (viewOption) {
      if (viewOption.selected) {
        return;
      } else {
        viewOption.selected = true;
        this.viewOptions
          .filter((vo) => vo.name != viewOption.name)
          .forEach((viewOption) => {
            viewOption.selected = false;
          });
        this.tasksView = viewOption.onFilter(
          this.taskGroupSelected?.tasks ?? []
        );
      }
    }
  }

  onSelectedGroupChange(viewAllTasks: boolean): void {
    this.viewAllTasks = viewAllTasks;
    if (this.viewAllTasks) {
      this.tasksView = [];
      this.taskGroups.forEach((tg) => {
        this.tasksView = this.tasksView.concat(tg.tasks);
      });
    } else {
      this.tasksView = this.taskGroupSelected?.tasks ?? [];
    }
  }

  private get taskGroupSelected(): TaskGroupModel | undefined {
    return this.taskGroups.find((tg) => tg.selected);
  }

  private get allTasks() {
    let allTasks: TaskModel[] = [];
    this.taskGroups.forEach((tg) => {
      allTasks = allTasks.concat(tg.tasks);
    });
    return allTasks;
  }
}
