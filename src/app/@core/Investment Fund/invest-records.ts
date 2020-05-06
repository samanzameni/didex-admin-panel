import {InvestType} from './invest-type.enum';

export interface InvestRecords {
  id: number;
  brfore: number;
  after: number;
  accrued: number;
  type: InvestType;
  timeStamp: Date;
}
