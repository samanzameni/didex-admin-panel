export interface MarketList {
  symbol?: string;
  baseCurrencyShortName:  string;
  quoteCurrencyShortName:  string;
  quantityIncrement:  number;
  tickSize:  number;
  takeLiquidityRate:  number;
  provideLiquidityRate: number;
}
