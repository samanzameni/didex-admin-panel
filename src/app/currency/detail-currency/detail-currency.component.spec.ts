import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCurrencyComponent } from './detail-currency.component';

describe('DetailCurrencyComponent', () => {
  let component: DetailCurrencyComponent;
  let fixture: ComponentFixture<DetailCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
