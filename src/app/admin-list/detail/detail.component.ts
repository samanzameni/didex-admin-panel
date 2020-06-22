import {Component, Input, OnInit} from '@angular/core';
import {RoleList} from '../../@core/Admin/role-list';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../@core/Admin/admin.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {RoleListRes} from '../../@core/Admin/role-list-res';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  userList: RoleList;
  user: RoleListRes;
  adminParam: string;
  detailParam: string;
  constructor(private router: ActivatedRoute, private admin: AdminService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService) {
    this.userList = {
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
    this.user = {
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
  }
  showList() {
    this.ngxShowLoader.show();
    return this.admin.getList(this.adminParam).subscribe(
      (res: any) => {
        this.user = res;
        for (const i of this.user.records) {
          if (i.userName ===  this.detailParam) {
            this.userList = i;
          }
        }
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
    this.adminParam = this.router.snapshot.queryParamMap.get('adminRole');
     this.detailParam = this.router.snapshot.queryParamMap.get('detail');
     this.showList();
  }

}
