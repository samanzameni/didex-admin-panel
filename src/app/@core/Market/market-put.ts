export interface MarketPut {
  symbol?: string;
  quantityIncrement:  number;
  tickSize:  number;
  takeLiquidityRate:  number;
  provideLiquidityRate: number;
}
