import {InvestType} from './invest-type.enum';

export interface Investment {
  id?: number;
  fundCurrencyShortName: string;
  name: string;
  type: InvestType;
  minimumFund: number;
  maximumFund: number;
  duration: number;
  fixedInterest: number;
  totalSupply: number;
  startDate: Date;
  expirationDate: Date;
}

