import {OrderSides} from './order-sides.enum';

export interface ReportsTrades {
  count: number;
  records: [
    {
      id: number;
      marketSymbol: string;
      buyerTraderId: number;
      sellerTraderId: number;
      volume: number;
      volumeInQoute: number;
      price: number;
      buyerFee: number;
      sellerFee: number;
      timeStamp: string;
      takeSide: OrderSides;
    }
  ];
}
