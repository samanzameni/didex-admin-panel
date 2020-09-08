export interface Promotion {
  id: number;
  currencyShortName: string;
  totalSupply: number;
  remainingSupply: number;
  startDate: string;
  endDate: string;
  oneTime: boolean;
  action: number;
  rewardPerAction: number;
  enabled: boolean;
}
