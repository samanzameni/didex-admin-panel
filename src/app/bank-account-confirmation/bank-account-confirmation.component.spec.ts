import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountConfirmationComponent } from './bank-account-confirmation.component';

describe('BankAccountConfirmationComponent', () => {
  let component: BankAccountConfirmationComponent;
  let fixture: ComponentFixture<BankAccountConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
