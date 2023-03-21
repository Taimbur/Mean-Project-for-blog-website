import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeesFormComponent } from './empolyees-form.component';

describe('EmpolyeesFormComponent', () => {
  let component: EmpolyeesFormComponent;
  let fixture: ComponentFixture<EmpolyeesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpolyeesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
