import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvestmentComponent } from './edit-investment.component';

describe('EditInvestmentComponent', () => {
  let component: EditInvestmentComponent;
  let fixture: ComponentFixture<EditInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
