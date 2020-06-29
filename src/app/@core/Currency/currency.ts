import {BlockChainNetworks} from './block-chain-networks.enum';

export interface Currency {
  shortName?: string;
  name: string;
  network: BlockChainNetworks;
  crypto: boolean;
  enabled: boolean;
  payinEnabled: boolean;
  payinConfirmations: number;
  payoutEnabled: boolean;
  transferEnabled: boolean;
  payoutFee: number;
  minWithdraw: number;
  minDeposit: number;
}
