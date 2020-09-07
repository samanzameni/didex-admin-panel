import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  promotionForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.promotionForm = this.formBuilder.group({
      promotion: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit() {
  }

}
