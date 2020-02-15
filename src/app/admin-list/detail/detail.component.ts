import {Component, Input, OnInit} from '@angular/core';
import {RoleList} from '../../@core/Admin/role-list';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() userList: RoleList;
  constructor() { }
  ngOnInit() {

  }

}
