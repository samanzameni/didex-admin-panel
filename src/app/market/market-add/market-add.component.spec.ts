import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAddComponent } from './market-add.component';

describe('MarketAddComponent', () => {
  let component: MarketAddComponent;
  let fixture: ComponentFixture<MarketAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
