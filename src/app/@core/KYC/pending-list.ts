export interface PendingList {
  count: number;
  records: [
    {
    id: number;
    firstName?: string;
    lastName?: string;
  }
  ];
}
