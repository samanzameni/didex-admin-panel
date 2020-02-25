export interface Reports {
  count: number;
  records: [
    {
    id: number;
    traderId: number;
    marketSymbol: string;
    side: number;
    status: number;
    type: number;
    timeInForce: number;
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
