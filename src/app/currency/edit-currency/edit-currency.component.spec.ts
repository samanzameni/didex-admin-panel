import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrencyComponent } from './edit-currency.component';

describe('EditCurrencyComponent', () => {
  let component: EditCurrencyComponent;
  let fixture: ComponentFixture<EditCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
