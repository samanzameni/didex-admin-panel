import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderUserInvestComponent } from './trader-user-invest.component';

describe('TraderUserInvestComponent', () => {
  let component: TraderUserInvestComponent;
  let fixture: ComponentFixture<TraderUserInvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderUserInvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderUserInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
