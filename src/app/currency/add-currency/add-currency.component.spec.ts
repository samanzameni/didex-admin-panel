import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyComponent } from './add-currency.component';

describe('AddCurrencyComponent', () => {
  let component: AddCurrencyComponent;
  let fixture: ComponentFixture<AddCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
