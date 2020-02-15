import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromRoleComponent } from './remove-from-role.component';

describe('RemoveFromRoleComponent', () => {
  let component: RemoveFromRoleComponent;
  let fixture: ComponentFixture<RemoveFromRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
