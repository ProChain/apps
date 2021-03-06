// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import appSettings from '@polkadot/ui-settings';

// When adding here, also ensure to add to Dummy.tsx

// import template from './123code';
import accounts from './accounts';
// import claims from './claims';
// import contracts from './contracts';
// import council from './council';
// import dashboard from './dashboard';
// import democracy from './democracy';
// import explorer from './explorer';
// import extrinsics from './extrinsics';
import genericAsset from './generic-asset';
// import i18n from './i18n';
// import js from './js';
// import parachains from './parachains';
// import settings from './settings';
// import society from './society';
// import staking from './staking';
// import storage from './storage';
// import sudo from './sudo';
// import techcomm from './techcomm';
// import toolbox from './toolbox';
import transfer from './transfer';
// import treasury from './treasury';
import publish from './publish';
import myDid from './my-did';
import team from './team';
import funds from './funds';
import createDid from './create-did';
import didTransfer from './did-transfer';
import adsManagement from './ads-management';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Routes {
  return appSettings.uiMode === 'light'
    ? [
      // dashboard,
      // explorer(t),
      accounts(t),
      // claims(t),
      transfer(t),
      genericAsset(t),
      null,
      // staking(t),
      // democracy(t),
      // council(t),
      // TODO Not sure about the inclusion of treasury, parachains & society here
      null,
      // settings(t)
    ]
    : [
      // dashboard(t),
      // explorer(t),
      accounts(t),
      // claims(t),
      transfer(t),
      // genericAsset(t),
      // null,
      // staking(t),
      // democracy(t),
      // council(t),
      // treasury(t),
      // techcomm(t),
      // parachains(t),
      // society(t),
      // null,
      // contracts(t),
      // storage(t),
      // extrinsics(t),
      // sudo(t),
      // null,
      // settings(t),
      // toolbox(t),
      // js(t),
      // hidden
      // template(t),
      myDid(t),
      createDid(t),
      didTransfer(t),
      funds(t),
      team(t),
      publish(t),
      adsManagement(t)
      // i18n(t)
    ];
}
