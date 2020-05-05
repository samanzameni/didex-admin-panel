import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInvestmentComponent } from './detail-investment.component';

describe('DetailInvestmentComponent', () => {
  let component: DetailInvestmentComponent;
  let fixture: ComponentFixture<DetailInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
