import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../@core/Login/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthServiceService) { }

  SignOut() {
    this.authService.logOut();
  }
  ngOnInit() {
  }

}
