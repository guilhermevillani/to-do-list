import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTaskSelectorComponent } from './group-task-selector.component';

describe('GroupTaskSelectorComponent', () => {
  let component: GroupTaskSelectorComponent;
  let fixture: ComponentFixture<GroupTaskSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTaskSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTaskSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
