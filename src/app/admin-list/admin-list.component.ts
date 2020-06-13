import { Component, OnInit } from '@angular/core';
import {AdminRole} from '../@core/Admin/admin-role';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../@core/Admin/admin.service';
import {RoleList} from '../@core/Admin/role-list';
import {NgxSpinnerService} from 'ngx-spinner';
import {AdminChild} from '../@core/Admin/admin-child';
import {ErrorPass} from '../@core/Admin/error';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {RoleListRes} from '../@core/Admin/role-list-res';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminRoles: AdminRole;
  adminList: AdminRole;
  roleList: RoleListRes;
  userRoleList: RoleList;
  add: AdminChild;
  remove: AdminChild;
  reset: AdminChild;
  passForm: FormGroup;
  inputType = false;
  querySearch: ReportsQuery;
  constructor(private toastrService: ToastrService, private admin: AdminService, private ngxShowLoader: NgxSpinnerService
  , private formBuilder: FormBuilder, private router: Router) {
    this.adminRoles = {
      roles: null,
    };
    this.adminList = {
      roles: 'trader',
    };
    this.add = {
      email: null,
      role: null,
    };
    this.remove = {
      email: null,
      role: null,
    };
    this.reset = {
      email: null,
      newPassword: null,
    };
    this.userRoleList = {
      userName: null,
      accessFailedCount: null,
      country: null,
      email: null,
      emailConfirmed: null,
      fullName: null,
      lockoutEnd: null,
      phoneNumber: null,
      phoneNumberConfirmed: null,
      twoFactorEnabled: null,
    };
    this.roleList = {
      count: null,
      records: [
        {
          userName: null,
          accessFailedCount: null,
          country: null,
          email: null,
          emailConfirmed: null,
          fullName: null,
          lockoutEnd: null,
          phoneNumber: null,
          phoneNumberConfirmed: null,
          twoFactorEnabled: null,
        }
        ],
    };
    this.querySearch = {
      UserId: null,
      Desc: null,
    };
    this.createForm();
  }

  createForm() {
    this.passForm = this.formBuilder.group({
      password: ['', [Validators.required]],
    });
  }

  hasNumber(): boolean {
    if (this.reset.newPassword === null) { return  true; } else {
    return /\d/.test(this.reset.newPassword); }
  }
  hasUpper(): boolean {
    if (this.reset.newPassword === null) { return  true; } else {
    return /[A-Z]/.test(this.reset.newPassword); }
  }
  hasLower(): boolean {
    if (this.reset.newPassword === null) { return  true; } else {
    return /[a-z]/.test(this.reset.newPassword); }
  }
  hasSpecial(): boolean {
    if (this.reset.newPassword === null) { return  true; } else {
    return /[!@#$%^&*_?]/.test(this.reset.newPassword); }
  }
  hasLength(): boolean {
    if (this.reset.newPassword === null) { return  true; } else {
    return /[A-Za-z\d!@#$%^&*_?]{8,}/.test(this.reset.newPassword); }
  }
  showRoles() {
    this.ngxShowLoader.show();
    return this.admin.getRoles().subscribe(
      (res: any) => {
        console.log(res);
        this.adminRoles = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  showList() {
    this.ngxShowLoader.show();
    return this.admin.getList(this.adminList.roles).subscribe(
      (res: any) => {
        console.log(res);
        this.roleList = res;
          this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege To See This Table.', '', {timeOut: 4000});
        }
        this.ngxShowLoader.hide();
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
    this.router.navigate(['/pages/adminListDetail'],
      { queryParams: { adminRole: this.adminList.roles , detail: this.userRoleList.userName } });
  }
  userRemoveFromRole(i) {
    this.userRoleList = i;
  }
  userAddToRole(i) {
    this.userRoleList = i;
  }
  userResetPassword(i) {
    this.userRoleList = i;
  }
  resetCancel() {
    this.reset.newPassword = null;
  }

  resetSubmit() {
    this.ngxShowLoader.show();
    this.reset.email = this.userRoleList.email;
    return this.admin.resetPatch(this.reset).subscribe(
      (res: any) => {
        console.log(res);
        this.reset.newPassword = null;
        this.showList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Change Password.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.reset.newPassword = null;
        this.ngxShowLoader.hide();
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        } else {
          this.toastrService.error('Invalid New Password Inputs.', '', {timeOut: 4000});
        }
      },
    );
  }

  addSubmit() {
    this.ngxShowLoader.show();
    this.add.email = this.userRoleList.email;
    return this.admin.addPatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.add.role = null;
        this.showList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add To Role.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.add.role = null;
        this.ngxShowLoader.hide();
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        } else {
        this.toastrService.error('Invalid Role.', '', {timeOut: 4000}); }
      },
    );
  }

  removeSubmit() {
    this.ngxShowLoader.show();
    this.remove.email = this.userRoleList.email;
    return this.admin.removePatch(this.remove).subscribe(
      (res: any) => {
        console.log(res);
        this.remove.role = null;
        this.showList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Remove From Role.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.remove.role = null;
        if ( err.status === 403) {
          this.ngxShowLoader.hide();
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        } else {
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Role.', '', {timeOut: 4000}); }
      },
    );
  }
  eyeClick() {
    if (this.inputType === false) {
      this.inputType = true;
    } else {
      this.inputType = false;
    }
  }
  receiveId($event) {
    this.querySearch.UserId = $event;
  }
  showSearch() {
    this.ngxShowLoader.show();
    return this.admin.searchGet(this.querySearch).subscribe(
      (res: any) => {
        console.log(res);
        this.roleList = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege To See This Table.', '', {timeOut: 4000});
        }
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.showRoles();
    this.showList();
    window.scroll(0, 0);
  }

}
