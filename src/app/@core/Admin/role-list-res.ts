export interface RoleListRes {
  count: number;
  records: [
    {
      userName: string;
      accessFailedCount: number;
      country: string;
      email: string;
      emailConfirmed: boolean;
      fullName: string;
      lockoutEnd: string;
      phoneNumber: string;
      phoneNumberConfirmed: boolean;
      twoFactorEnabled: boolean;
    }
  ];
}
