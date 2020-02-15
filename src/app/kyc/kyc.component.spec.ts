import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCComponent } from './kyc.component';

describe('KYCComponent', () => {
  let component: KYCComponent;
  let fixture: ComponentFixture<KYCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
