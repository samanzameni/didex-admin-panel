import {TransactionStatus} from './transaction-status.enum';
import {TransactionType} from './transaction-type.enum';

export interface ReportsTransactions {
  count: number;
  records: [
    {
      id: number;
      transactionId: string;
      traderId: number;
      currencyShortName: string;
      amount: number;
      fee: number;
      address: string;
      hash: string;
      status: TransactionStatus;
      type: TransactionType;
      createdAt: string;
      updatedAt: string;
      errorCode: string;
    }
  ];
}
