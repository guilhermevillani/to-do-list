import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-group-task-popup',
  templateUrl: './new-group-task-popup.component.html',
  styleUrls: ['./new-group-task-popup.component.scss'],
})
export class NewGroupTaskPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {}
}
