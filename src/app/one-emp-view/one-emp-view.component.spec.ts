import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEmpViewComponent } from './one-emp-view.component';

describe('OneEmpViewComponent', () => {
  let component: OneEmpViewComponent;
  let fixture: ComponentFixture<OneEmpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneEmpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneEmpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
