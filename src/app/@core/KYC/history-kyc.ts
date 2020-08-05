import {TraderStatus} from '../Trader/trader-status.enum';

export interface HistoryKYC {
  note: string;
  status: TraderStatus;
  timeStamp: string;
  byUserEmail: string;
}
