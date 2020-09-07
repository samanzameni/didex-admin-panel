import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionEmailsComponent } from './promotion-emails.component';

describe('PromotionEmailsComponent', () => {
  let component: PromotionEmailsComponent;
  let fixture: ComponentFixture<PromotionEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
