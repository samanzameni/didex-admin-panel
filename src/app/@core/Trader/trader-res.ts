import {TraderStatus} from './trader-status.enum';

export interface TraderRes {
  count: number;
  records: [
    {
      id?: number;
      email?: string;
      status?: TraderStatus;
    },
  ];
}
