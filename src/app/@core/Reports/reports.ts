import {OrderSides} from './order-sides.enum';
import {OrderStatus} from './order-status.enum';
import {OrderTimeInForce} from './order-time-in-force.enum';
import {OrderType} from './order-type.enum';

export interface Reports {
  count: number;
  records: [
    {
    id: number;
    traderId: number;
    marketSymbol: string;
    side: OrderSides;
    status: OrderStatus;
    type: OrderType;
    timeInForce: OrderTimeInForce;
    quantity: number;
    price: number;
    executedQuantity: number;
    createdAt: string;
    updatedAt: string;
    stopPrice: number;
    postOnly: boolean;
    expireTime: string;
    }
    ];
}
