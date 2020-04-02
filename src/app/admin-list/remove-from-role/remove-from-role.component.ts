import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoleList} from '../../@core/Admin/role-list';
import {AdminChild} from '../../@core/Admin/admin-child';
import {AdminRole} from '../../@core/Admin/admin-role';
import {AdminService} from '../../@core/Admin/admin.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-remove-from-role',
  templateUrl: './remove-from-role.component.html',
  styleUrls: ['./remove-from-role.component.scss'],
})
export class RemoveFromRoleComponent implements OnInit {
  add: AdminChild;
  adminRoles: AdminRole;
  @Input() userList: RoleList;
  mainPage = true;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private adminService: AdminService, private toastrService: ToastrService, private ngxShowLoader: NgxSpinnerService) {
    this.add = {
      email: '',
      role: '',
    };
    this.adminRoles = {
      roles: '',
    };
  }
  removeSubmit() {
    this.ngxShowLoader.show();
    this.add.email = this.userList.email;
    return this.adminService.removePatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.messageEvent.emit(this.mainPage);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Remove From Role.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        }
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Role.', '', {timeOut: 4000});
      },
    );
  }
  showList() {
    this.ngxShowLoader.show();
    return this.adminService.getRoles().subscribe(
      (res: any) => {
        console.log(res);
        this.adminRoles = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
      },
    );
  }

  ngOnInit() {
    this.showList();
    window.scroll(0, 0);
  }

}
