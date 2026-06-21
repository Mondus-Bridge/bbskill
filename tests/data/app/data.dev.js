export const commonNets = "0xf1d1d25a8D7993847218A4e32cEbF2E447764477"; // ERC20, BEP20, Avalanche
export const onlyBtc = "bc1qx8e6we6wcjglp7alzraqw787tzezhxnrjaglsr"
export const onlyTrx = "TSbzkXipn513GCWeUG9MY5UMopWxYCtcig";         // Tron / TRC20
export const onlyTon = "UQAf4EXg_rKszSIXkvw-0YB6xBviTJnUQ5nJHaV9qgO9ozwU";
export const onlyAtom = "cosmos1hgycd9q0em0wavve89w5kt953xr5y2r69xmudn"
export const MEMO_TON = "821151843";
export const MEMO_ATOM = "673425173";

export const cryptoCur = [
  {blockchain_network: 1, ticker:'BTC', network: 'BEP20', value: commonNets, memo: null},
  {blockchain_network: 2, ticker:'BTC', network: 'BTC', value: onlyBtc, memo: null},
  {blockchain_network: 3, ticker:'ETH', network: 'ERC20', value: commonNets, memo: null},
  {blockchain_network: 4, ticker:'ETH', network: 'BEP20', value: commonNets, memo: null},
  {blockchain_network: 5, ticker:'USDT', network: 'BEP20', value: commonNets, memo: null},
  {blockchain_network: 6, ticker:'USDT', network: 'TRC20', value: onlyTrx, memo: null},
  {blockchain_network: 7, ticker:'USDT', network: 'ERC20', value: commonNets, memo: null},
  {blockchain_network: 8, ticker:'USDC', network: 'ERC20', value: commonNets, memo: null},
  {blockchain_network: 10, ticker:'USDC', network: 'BEP20', value: commonNets, memo: null},
  {blockchain_network: 12, ticker:'ATOM', network: 'Cosmos', value: onlyAtom, memo: MEMO_ATOM},
  {blockchain_network: 15, ticker:'TRX', network: 'TRC20', value: onlyTrx, memo: null},
  {blockchain_network: 78, ticker:'TON', network: 'TON', value: onlyTon, memo: MEMO_TON},
  {blockchain_network: 79, ticker:'USDT', network: 'TON', value: onlyTon, memo: MEMO_TON},
];