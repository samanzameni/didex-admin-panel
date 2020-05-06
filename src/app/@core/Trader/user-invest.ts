import {InvestType} from '../Investment Fund/invest-type.enum';
import {UserInvestStatus} from '../Investment Fund/user-invest-status.enum';

export interface UserInvest {
  count: number;
  records: [
    {
      id: number;
      investmentFundId: number;
      traderId: number;
      investDate: Date,
      totalEarn: number;
      amount: number;
      investRecords: [
        {
          id: number;
          brfore: number;
          after: number;
          accrued: number;
          type: InvestType;
          timeStamp: Date;
        }
      ],
      status: UserInvestStatus;
    }
  ];
}
