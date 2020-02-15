import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRegisterComponent } from './custom-register.component';

describe('CustomRegisterComponent', () => {
  let component: CustomRegisterComponent;
  let fixture: ComponentFixture<CustomRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
