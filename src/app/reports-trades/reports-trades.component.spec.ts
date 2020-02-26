import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTradesComponent } from './reports-trades.component';

describe('ReportsTradesComponent', () => {
  let component: ReportsTradesComponent;
  let fixture: ComponentFixture<ReportsTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
