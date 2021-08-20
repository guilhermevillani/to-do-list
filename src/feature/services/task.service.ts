import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TaskModel } from '../models/task';
import { TaskGroupModel } from '../models/task-group';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskGroupModel[]> {
    return this.http
      .get<TaskGroupModel[]>(environment.apiUrl + '/taskGroups')
      .pipe(
        map((taskGroups) =>
          taskGroups.map((tg) => ({
            ...tg,
            selected: false,
          }))
        )
      );
  }

  createTask(groupId: number, tasks: TaskModel[]): Observable<TaskGroupModel> {
    return this.http.patch<TaskGroupModel>(
      environment.apiUrl + '/taskGroups/' + groupId,
      {
        tasks,
      }
    );
  }
}
