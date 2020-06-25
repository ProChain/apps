// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Button, Input, TxButton } from '@polkadot/react-components';
import { encodeAddress } from '@polkadot/util-crypto';

interface Props {
  className?: string;
  accountId?: string | null;
}

function Generate ({ className, accountId }: Props): React.ReactElement<Props> {
  const [pubkey, setPubkey] = useState<string | null>(null);
  const didType = '4';
  
  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
          <h2>创建DID</h2>
          <Input
            maxLength={150}
            onChange={setPubkey}
            label='Public key or Address'
            placeholder='请输入您的公钥或地址'
          />
          <Input
            maxLength={50}
            onChange={setPubkey}
            label='Did Type'
            value='应用'
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!pubkey}
              icon='send'
              label='确认创建'
              params={[pubkey, pubkey, didType, '', null, null]}
              tx='did.create'
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Generate)`
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
