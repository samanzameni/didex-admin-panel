import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketEditComponent } from './market-edit.component';

describe('MarketEditComponent', () => {
  let component: MarketEditComponent;
  let fixture: ComponentFixture<MarketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
