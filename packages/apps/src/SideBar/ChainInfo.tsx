// Copyright 2017-2020 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeVersion } from '@polkadot/types/interfaces';

import React from 'react';
import styled from 'styled-components';
import { ChainImg, Icon } from '@polkadot/react-components';
import { useCall, useApi } from '@polkadot/react-hooks';
import { BestNumber, Chain } from '@polkadot/react-query';
import { useTranslation } from '../translate';

interface Props {
  className?: string;
  onClick?: () => void;
}

function ChainInfo ({ className, onClick }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const runtimeVersion = useCall<RuntimeVersion>(api.rpc.state.subscribeRuntimeVersion, []);

  return (
    <div
      className={`apps--SideBar-logo ${className}`}
      onClick={onClick}
    >
      <div className='apps--SideBar-logo-inner'>
        <ChainImg />
        <div className='info'>
          <Chain className='chain' />
          {runtimeVersion && (
            <div className='runtimeVersion'>{t('version {{version}}', { replace: { version: runtimeVersion.specVersion.toNumber() } })}</div>
          )}
          <BestNumber label='#' />
        </div>
      </div>
    </div>
  );
}

export default React.memo(styled(ChainInfo)`
  border-top: 0.5rem solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.75rem;
  margin: 0 0 0.5rem -1rem;

  .apps--SideBar-logo-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10.5rem;

    img {
      flex: 0;
      width: 10.75rem;
      margin: 2rem 0 1rem;
    }

    .icon.dropdown,
    > div.info {
      color: white;
      opacity: 0.75;
      text-align: right;
      vertical-align: middle;
    }

    .icon.dropdown {
      flex: 0;
      margin: 0;
    }

    > div.info {
      display: none;
      flex: 1;
      padding-right: 0.5rem;

      > div.chain {
        font-size: 0.9rem;
        line-height: 1rem;
      }

      > div.runtimeVersion {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }
`);
