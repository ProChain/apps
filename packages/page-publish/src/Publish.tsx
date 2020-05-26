// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useState } from 'react';
import { Button, Input, InputBalance, TxButton } from '@polkadot/react-components';
import styled from 'styled-components';

interface Props {
  className?: string;
  accountId?: string | null;
}

function Publish ({ className, accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | undefined | null>(new BN(10**15));
  const [name, setName] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [period, setPeriod] = useState<BN | undefined | null>(null);
  const [singleClick, setSingleClick] = useState<BN | undefined | null>(new BN(10**15));
  const [extraShare, setExtraShare] = useState<BN | undefined | null>(null);
  
  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
        <h2>发布广告</h2>
          <Input
            maxLength={50}
            min={2}
            onChange={setName}
            label='Ads Name'
            placeholder='请输入广告名称'
          />
          <Input
            maxLength={50}
            min={2}
            onChange={setTopic}
            label='Ads Topic'
            placeholder='请输入广告所属行业'
          />
          <InputBalance
            label='Advertising expenses'
            onChange={setAmount}
            placeholder='请输入广告预期投放费用'
            value={amount}
          />
          <Input
            maxLength={50}
            min={2}
            onChange={setPeriod}
            label='Ads Period'
            placeholder='请输入广告投放周期'
          />
          <InputBalance
            label='Single Click Fee'
            onChange={setSingleClick}
            placeholder='请输入单次点击费用'
            value={singleClick}
          />
          <Input
            min={1}
            onChange={setExtraShare}
            label='Extra Share'
            placeholder='请输入广告目标客户加成比例'
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              icon='send'
              label='make transfer'
              params={[name, topic, amount, singleClick, period]}
              tx='ads.publish'
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Publish)`
  padding: 50px;
    background: #fff;
    width: 60%;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .ui--row {
      justify-content: center;
      h2 {
        padding-left: 2rem;
      }
      div.large {
        flex: 0 100%;
      }
    }
`);
