// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// global app props
import { AppProps as Props } from '@polkadot/react-components/types';

// external imports (including those found in the packages/*
// of this repo)
import React, { useState } from 'react';
import { lastAccount } from '@polkadot/react-hooks';
import Partner from './Partner';

function Team ({ className }: Props): React.ReactElement<Props> {
  const accountId = lastAccount();
  
  return (
    // in all apps, the main wrapper is setup to allow the padding
    // and margins inside the application. (Just from a consistent pov)
    <main className={className}>
      <Partner accountId={accountId} />
    </main>
  );
}

export default React.memo(Team);
