import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from './@core/Login/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Didex Admin';

  constructor() {
  }

  ngOnInit() {
  }
}
