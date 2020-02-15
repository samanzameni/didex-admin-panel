import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToRoleComponent } from './add-to-role.component';

describe('AddToRoleComponent', () => {
  let component: AddToRoleComponent;
  let fixture: ComponentFixture<AddToRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
