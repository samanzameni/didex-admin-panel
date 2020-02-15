import { Component, OnInit } from '@angular/core';
import {AdminRole} from '../@core/Admin/admin-role';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../@core/Admin/admin.service';
import {RoleList} from '../@core/Admin/role-list';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminRoles: AdminRole;
  adminList: AdminRole;
  roleList: RoleList[];
  userRoleList: RoleList;
  mainPage = true;
  detailSubmitted = false;
  AddToRoleSubmitted = false;
  ResetPasswordSubmitted = false;
  RemoveFromRoleSubmitted = false;

  constructor(private toastrService: ToastrService, private admin: AdminService) {
    this.adminRoles = {
      roles: '',
    };
    this.adminList = {
      roles: '',
    };
  }
  showRoles() {
    return this.admin.getRoles().subscribe(
      (res: any) => {
        console.log(res);
        this.adminRoles = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  showList() {
    console.log(this.adminList.roles);
    return this.admin.getList(this.adminList.roles).subscribe(
      (res: any) => {
        console.log(res);
        this.roleList = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  selectedRole(event) {
    if (event.target.value !== null) {
      this.showList();
    }
  }
  userDetail(i) {
   this.userRoleList = i;
    this.mainPage = false;
    this.detailSubmitted = true;
  }
  userRemoveFromRole(i) {
    this.userRoleList = i;
    this.mainPage = false;
    this.RemoveFromRoleSubmitted = true;
  }
  userAddToRole(i) {
    this.userRoleList = i;
    this.mainPage = false;
    this.AddToRoleSubmitted = true;
  }
  userResetPassword(i) {
    this.userRoleList = i;
    this.mainPage = false;
    this.ResetPasswordSubmitted = true;
  }
  userBack() {
    this.mainPage = true;
    this.ResetPasswordSubmitted = false;
    this.AddToRoleSubmitted = false;
    this.RemoveFromRoleSubmitted = false;
    this.detailSubmitted = false;
  }
  ngOnInit() {
    this.showRoles();
  }

}
