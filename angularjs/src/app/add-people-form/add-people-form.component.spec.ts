import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeopleFormComponent } from './add-people-form.component';

describe('AddPeopleFormComponent', () => {
  let component: AddPeopleFormComponent;
  let fixture: ComponentFixture<AddPeopleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeopleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeopleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
