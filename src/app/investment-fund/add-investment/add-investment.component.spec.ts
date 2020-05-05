import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestmentComponent } from './add-investment.component';

describe('AddInvestmentComponent', () => {
  let component: AddInvestmentComponent;
  let fixture: ComponentFixture<AddInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
