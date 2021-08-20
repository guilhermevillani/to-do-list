import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { GroupTaskSelectorComponent } from './pages/home/components/group-task-selector/group-task-selector.component';
import { TaskListComponent } from './pages/home/components/task-list/task-list.component';
import { TaskComponent } from './pages/home/components/task/task.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGroupTaskPopupComponent } from './pages/home/components/new-group-task-popup/new-group-task-popup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    GroupTaskSelectorComponent,
    TaskListComponent,
    TaskComponent,
    NewGroupTaskPopupComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FeatureRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class FeatureModule {}
