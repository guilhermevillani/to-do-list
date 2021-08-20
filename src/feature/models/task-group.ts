import { TaskModel } from './task';

export interface TaskGroupModel {
  id: number;
  name: string;
  tasks: TaskModel[];
  selected: boolean;
}
