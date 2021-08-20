import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupTaskPopupComponent } from './new-group-task-popup.component';

describe('NewGroupTaskPopupComponent', () => {
  let component: NewGroupTaskPopupComponent;
  let fixture: ComponentFixture<NewGroupTaskPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupTaskPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
