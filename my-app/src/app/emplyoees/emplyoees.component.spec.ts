import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeesComponent } from './emplyoees.component';

describe('EmplyoeesComponent', () => {
  let component: EmplyoeesComponent;
  let fixture: ComponentFixture<EmplyoeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyoeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyoeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
