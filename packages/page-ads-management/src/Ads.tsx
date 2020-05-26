// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// only here, needs to be available for the rest of the codebase
/* eslint-disable react/jsx-max-props-per-line */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import store from 'store';
import { useApi, useCall, didToHex } from '@polkadot/react-hooks';
import { Balance } from '@polkadot/react-query';
import { AdsMetadata } from './types';

interface Props {
  className?: string;
  accountId: string;
}

function AdsMan ({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const did = didToHex(store.get('did'));
  const result = useCall<AdsMetadata>(api.query.ads.adsRecords, [did]);
  const records = result && !result.isEmpty ? result.toHuman() : null

  return (
    <div className={className}>
      <h3>我的资产</h3>
      <Balance params={accountId} />
      <h3>我的广告</h3>
      {records ? (
        <>
          <ul>
            <li>广告主题: { records?.topic}</li>
            <li>总投放费用: { records?.total_amount}</li>
            <li>广告余额: { records?.surplus}</li>
            <li>单次点击费用: { records?.single_click_fee}</li>
            <li>创建时间： { records?.create_time}</li>
            <li>投放周期： { records?.period}</li>
          </ul>
          <div>
            <button className='ui primary button'>开始</button>
            <button className='ui secondary button'>暂停</button>
          </div>
        </>
      )
      : 
      (<div>
        您还没有投放广告
      </div>)
    }
    </div>
  );
}

export default React.memo(styled(AdsMan)`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  ul {
    list-style-type: none;
    margin: 10px;
    padding: 0;
  }
  li {
    list-style-type: none;
    line-height: 28px;
  }
`);
