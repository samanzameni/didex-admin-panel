import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInvestRecordsComponent } from './user-invest-records.component';

describe('UserInvestRecordsComponent', () => {
  let component: UserInvestRecordsComponent;
  let fixture: ComponentFixture<UserInvestRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInvestRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInvestRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
