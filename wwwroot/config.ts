let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.plenteum.com/api/',
    mainnetExplorerUrl: "https://nxstream.io",
    testnet: false,
    coinUnitPlaces: 4,
    txMinConfirms: 60,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 120, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    addressPrefix: 22272,
    integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('1000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    defaultMixin: 3, // default value mixin
    idleTimeout: 30,
    idleWarningDuration: 20,

    coinSymbol: 'NXM',
    openAliasPrefix: "nxm",
    coinName: 'NXstream',
    coinUriPrefix: 'nxstream:',
    avgBlockTime: 30,
    maxBlockNumber: 500000000,
};
