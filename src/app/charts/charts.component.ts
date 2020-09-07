import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chartForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.chartForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.min(0)] ],
      day: ['', [Validators.required, Validators.min(0)] ],
      hour: ['', [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit() {
  }

}
