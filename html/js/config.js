var config = {
    //apiUrl: "http://0.0.0.0:1984/",
    apiUrl: "http://127.0.0.1:1984/",
    mainnetExplorerUrl: "http://127.0.0.1:8081/",
    testnetExplorerUrl: "https://testnet.xmrchain.com/",
    stagenetExplorerUrl: "http://139.162.60.17:8082/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'RIX',
    openAliasPrefix: "rix",
    coinName: 'Rixe',
    coinUriPrefix: 'rixe:',
    addressPrefix: 1843731,
    integratedAddressPrefix: 1991187,
    subAddressPrefix: 2302483,
    addressPrefixTestnet: 26387,
    integratedAddressPrefixTestnet: 108307,
    subAddressPrefixTestnet: 419603,
    addressPrefixStagenet: 24851,
    integratedAddressPrefixStagenet: 827667,
    subAddressPrefixStagenet: 303379,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 10, // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
