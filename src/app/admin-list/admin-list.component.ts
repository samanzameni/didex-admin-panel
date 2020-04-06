import { Component, OnInit } from '@angular/core';
import {AdminRole} from '../@core/Admin/admin-role';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../@core/Admin/admin.service';
import {RoleList} from '../@core/Admin/role-list';
import {NgxSpinnerService} from 'ngx-spinner';
import {AdminChild} from '../@core/Admin/admin-child';
import {ErrorPass} from '../@core/Admin/error';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  add: AdminChild;
  remove: AdminChild;
  reset: AdminChild;
  mainPage = true;
  detailSubmitted = false;
  errorPass: ErrorPass[];
  passForm: FormGroup;

  constructor(private toastrService: ToastrService, private admin: AdminService, private ngxShowLoader: NgxSpinnerService
  , private formBuilder: FormBuilder) {
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
    this.createForm();
  }

  createForm() {
    this.passForm = this.formBuilder.group({
      password: ['', Validators.required],
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
    this.mainPage = false;
    this.detailSubmitted = true;
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
  userBack() {
    this.mainPage = true;
    this.detailSubmitted = false;
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
        this.ngxShowLoader.hide();
        this.reset.newPassword = null;
        this.errorPass = err.error;
        for (const i of this.errorPass) {
          if (i.code === 'PasswordTooShort') {
            this.toastrService.error('Passwords must be at least 8 characters.', '', {timeOut: 4000});
          }
          if (i.code === 'PasswordRequiresNonAlphanumeric') {
            this.toastrService.error('Passwords must have at least one non alphanumeric character.', '', {timeOut: 4000});
          }
          if (i.code === 'PasswordRequiresDigit') {
            this.toastrService.error('Passwords must have at least one digit (\'0\'-\'9\').', '', {timeOut: 4000});
          }
          if (i.code === 'PasswordRequiresUpper') {
            this.toastrService.error('Passwords must have at least one uppercase (\'A\'-\'Z\').', '', {timeOut: 4000});
          }
          if (i.code === 'PasswordRequiresLower') {
            this.toastrService.error('Passwords must have at least one lowercase (\'a\'-\'z\').', '', {timeOut: 4000});
          }
        }
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
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
        if ( err.status === 403) {
          this.ngxShowLoader.hide();
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        } else {
        this.ngxShowLoader.hide();
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


  ngOnInit() {
    this.showRoles();
    this.showList();
    window.scroll(0, 0);
  }

}
