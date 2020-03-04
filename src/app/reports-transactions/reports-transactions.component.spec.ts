import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTransactionsComponent } from './reports-transactions.component';

describe('ReportsTransactionsComponent', () => {
  let component: ReportsTransactionsComponent;
  let fixture: ComponentFixture<ReportsTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
