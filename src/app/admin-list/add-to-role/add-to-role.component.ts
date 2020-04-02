import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminService} from '../../@core/Admin/admin.service';
import {AdminChild} from '../../@core/Admin/admin-child';
import {ToastrService} from 'ngx-toastr';
import {AdminRole} from '../../@core/Admin/admin-role';
import {RoleList} from '../../@core/Admin/role-list';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-add-to-role',
  templateUrl: './add-to-role.component.html',
  styleUrls: ['./add-to-role.component.scss'],
})
export class AddToRoleComponent implements OnInit {
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
  addSubmit() {
    this.ngxShowLoader.show();
    this.add.email = this.userList.email;
    return this.adminService.addPatch(this.add).subscribe(
      (res: any) => {
        console.log(res);
        this.messageEvent.emit(this.mainPage);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add To Role.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
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
        if ( err.status === 403) {
          this.toastrService.error('You Dont Have Privilege.', '', {timeOut: 4000});
        }
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.showList();
    window.scroll(0, 0);
  }

}
