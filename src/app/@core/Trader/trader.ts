import {TraderStatus} from './trader-status.enum';

export interface Trader {
  id?: number;
  email?: string;
  status?: TraderStatus;
  note?: string;
}
