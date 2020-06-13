export interface ReportsQuery {
  TraderId?: number;
  UserId?: number;
  TraderEmail?: number;
  Symbol?: string;
  Desc?: boolean;
  FilterBy?: string;
  From?: string;
  Till?: string;
  Offset?: number;
  Limit?: number;
  CurrencyShortName?: string;
  TransactionId?: string;
}
