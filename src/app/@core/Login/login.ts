export interface Login {
  email: string;
  password: string;
  fullName?: string;
  country?: string;
  phoneNumber?: string;
  token?: string;
  twoFactorEnabled?: boolean;
  roles?: string[];
}
