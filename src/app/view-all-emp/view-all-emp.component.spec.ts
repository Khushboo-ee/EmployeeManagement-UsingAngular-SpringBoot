import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmpComponent } from './view-all-emp.component';

describe('ViewAllEmpComponent', () => {
  let component: ViewAllEmpComponent;
  let fixture: ComponentFixture<ViewAllEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
