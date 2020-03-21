export interface Information {
  personalInformation: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    birthCountryCode: string;
    addressLine1: string;
    addressLine2: string;
    countryCode: string;
    zipCode: string;
    city: string;
  };
  mobileNumber: {
    mobileNumber: string;
    countryTelephoneCode: string;
    code: string;
  };
  kycImages: [
    {
      image: string;
      imageType: number;
    }
  ];
  email: string;
}
