import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  mainPage = true;
  @Output() messageEvent = new EventEmitter<boolean>();
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
        this.messageEvent.emit(this.mainPage);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Change Password.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        }
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Password.', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
