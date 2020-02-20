export interface ReportsQuery {
  TraderId?: number;
  Symbol?: string;
  Desc?: boolean;
  FilterBy?: string;
  From?: string;
  Till?: string;
  Offset: number;
  Limit: number;
}
