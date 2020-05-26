// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, InputBalance, Input, TxButton } from '@polkadot/react-components';
import { didToHex } from './util'

interface Props {
  className?: string;
  accountId?: string | null;
}

function DidTransfer ({ className, accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | undefined | null>(null);
  const [did, setDid] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>('normal transfer');
  const _onDidChange = useCallback(
    (did: string): void => {
      const didHex = didToHex(did)
      console.log(didHex, 'did hex----');
      setDid(didHex)
    },
    []
  );

  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
          <h2>转账</h2>
          <Input
            maxLength={50}
            min={20}
            onChange={_onDidChange}
            label='Recipient DID'
            placeholder='请输入收款人的DID'
          />
          <InputBalance
            label='Amount to transfer'
            onChange={setAmount}
          />
          <Input
            maxLength={150}
            min={1}
            onChange={setMemo}
            label='Memo'
            value={memo}
            placeholder='请输入备注'
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              icon='send'
              label='make transfer'
              params={[did, amount, memo]}
              tx='did.transfer'
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(DidTransfer)`
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
