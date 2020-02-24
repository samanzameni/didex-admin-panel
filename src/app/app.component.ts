import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from './@core/Login/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Didex Admin';
  login: boolean;
  first: boolean;

  constructor(private authServiceService: AuthServiceService) {
  }

  ngOnInit() {
    if (this.authServiceService.isAuthenticated() === true ) {
     this.login = true;
    } else {
      this.login = false;
      this.first = true;
    }
  }
}
