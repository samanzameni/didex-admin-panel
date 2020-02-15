import {Component, Input, OnInit} from '@angular/core';
import {RoleList} from '../../@core/Admin/role-list';
import {AdminChild} from '../../@core/Admin/admin-child';
import {AdminRole} from '../../@core/Admin/admin-role';
import {AdminService} from '../../@core/Admin/admin.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-remove-from-role',
  templateUrl: './remove-from-role.component.html',
  styleUrls: ['./remove-from-role.component.scss'],
})
export class RemoveFromRoleComponent implements OnInit {
  add: AdminChild;
  adminRoles: AdminRole;
  @Input() userList: RoleList;
  constructor(private adminService: AdminService, private toastrService: ToastrService) {
    this.add = {
      email: '',
      role: '',
    };
    this.adminRoles = {
      roles: '',
    };
  }
  removeSubmit() {
    this.add.email = this.userList.email;
    return this.adminService.removePatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Remove From Role.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.toastrService.error('Invalid Role.', '', {timeOut: 4000});
      },
    );
  }
  showList() {
    return this.adminService.getRoles().subscribe(
      (res: any) => {
        console.log(res);
        this.adminRoles = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  ngOnInit() {
    this.showList();
  }

}
