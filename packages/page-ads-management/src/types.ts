import { Balance, Moment } from '@polkadot/types/interfaces';
import { Struct } from '@polkadot/types/codec';

export interface AdsMetadata extends Struct {
  advertiser: string,
	topic: string,
	total_amount: Balance,
	surplus: Balance,
	gas_fee_used: Balance,
	single_click_fee: Balance,
	create_time: Moment,
	period: Moment,
}