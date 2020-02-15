import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../@core/Admin/admin.service';
import {AdminChild} from '../../@core/Admin/admin-child';
import {ToastrService} from 'ngx-toastr';
import {AdminRole} from '../../@core/Admin/admin-role';
import {RoleList} from '../../@core/Admin/role-list';

@Component({
  selector: 'app-add-to-role',
  templateUrl: './add-to-role.component.html',
  styleUrls: ['./add-to-role.component.scss'],
})
export class AddToRoleComponent implements OnInit {
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
  addSubmit() {
    this.add.email = this.userList.email;
    return this.adminService.addPatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Add To Role.', '', {timeOut: 4000});
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
