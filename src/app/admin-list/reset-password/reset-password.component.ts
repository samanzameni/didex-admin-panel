import {Component, Input, OnInit} from '@angular/core';
import {RoleList} from '../../@core/Admin/role-list';
import {AdminChild} from '../../@core/Admin/admin-child';
import {AdminService} from '../../@core/Admin/admin.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  add: AdminChild;
  @Input() userList: RoleList;
  constructor(private adminService: AdminService, private toastrService: ToastrService , private ngxShowLoader: NgxSpinnerService) {
    this.add = {
      email: '',
      newPassword: '',
    };
  }
  resetSubmit() {
    this.ngxShowLoader.show();
    this.add.email = this.userList.email;
    return this.adminService.resetPatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Change Password.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Password.', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
