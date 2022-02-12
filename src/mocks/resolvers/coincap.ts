import { rest } from 'msw';
import { baseURL } from '@/services/coincap.instance';

export const handlers = [
  rest.get(`${baseURL}/assets/`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: 'bitcoin',
            rank: '1',
            symbol: 'MONO',
            name: 'Bitcoin',
            supply: '18932962.0000000000000000',
            maxSupply: '21000000.0000000000000000',
            marketCapUsd: '791383260483.5449249180944518',
            volumeUsd24Hr: '12163125356.3970398093084834',
            priceUsd: '41799.2314400432919539',
            changePercent24Hr: '-1.9900950513608547',
            vwap24Hr: '42208.9787899905220404',
            explorer: 'https://blockchain.info/',
          },
          {
            id: 'ethereum',
            rank: '2',
            symbol: 'ETH',
            name: 'Ethereum',
            supply: '119209098.0615000000000000',
            maxSupply: null,
            marketCapUsd: '376762731007.0879710822621080',
            volumeUsd24Hr: '8378458834.8783136104653785',
            priceUsd: '3160.5199362612071354',
            changePercent24Hr: '-3.0117051917289614',
            vwap24Hr: '3206.4090923699590880',
            explorer: 'https://etherscan.io/',
          },
          {
            id: 'tether',
            rank: '3',
            symbol: 'USDT',
            name: 'Tether',
            supply: '78304569300.6614700000000000',
            maxSupply: null,
            marketCapUsd: '78458304689.8225303134226650',
            volumeUsd24Hr: '33731710177.1126256531854148',
            priceUsd: '1.0019633003608100',
            changePercent24Hr: '-0.0909583387837306',
            vwap24Hr: '1.0012616340056857',
            explorer: 'https://www.omniexplorer.info/asset/31',
          },
          {
            id: 'binance-coin',
            rank: '4',
            symbol: 'BNB',
            name: 'BNB',
            supply: '166801148.0000000000000000',
            maxSupply: '166801148.0000000000000000',
            marketCapUsd: '77655893246.5854245680633232',
            volumeUsd24Hr: '1036767575.8463922803231369',
            priceUsd: '465.5597049403126684',
            changePercent24Hr: '-2.8442788991599248',
            vwap24Hr: '473.7782326900529488',
            explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
          },
          {
            id: 'cardano',
            rank: '5',
            symbol: 'ADA',
            name: 'Cardano',
            supply: '33526583961.3720000000000000',
            maxSupply: '45000000000.0000000000000000',
            marketCapUsd: '49658272498.2647823032302543',
            volumeUsd24Hr: '3466005031.3530722688075681',
            priceUsd: '1.4811611154741883',
            changePercent24Hr: '-2.3237942188436959',
            vwap24Hr: '1.5439172191424890',
            explorer: 'https://cardanoexplorer.com/',
          },
          {
            id: 'usd-coin',
            rank: '6',
            symbol: 'USDC',
            name: 'USD Coin',
            supply: '45537294073.8334300000000000',
            maxSupply: null,
            marketCapUsd: '45618989263.4949098058379990',
            volumeUsd24Hr: '1291772021.0450518242023856',
            priceUsd: '1.0017940281987116',
            changePercent24Hr: '-0.2569095962997444',
            vwap24Hr: '1.0017931306032469',
            explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
          {
            id: 'solana',
            rank: '7',
            symbol: 'SOL',
            name: 'Solana',
            supply: '314152292.3191895500000000',
            maxSupply: null,
            marketCapUsd: '43113055671.1102516671150757',
            volumeUsd24Hr: '333854000.9700498870830197',
            priceUsd: '137.2361645138209021',
            changePercent24Hr: '-3.2596520305519187',
            vwap24Hr: '140.1513911980680536',
            explorer: 'https://explorer.solana.com/',
          },
          {
            id: 'xrp',
            rank: '8',
            symbol: 'XRP',
            name: 'XRP',
            supply: '45404028640.0000000000000000',
            maxSupply: '100000000000.0000000000000000',
            marketCapUsd: '33843189417.3070280362347200',
            volumeUsd24Hr: '898337873.2860502529512808',
            priceUsd: '0.7453785584896730',
            changePercent24Hr: '-2.3647677085425069',
            vwap24Hr: '0.7580654777908256',
            explorer: 'https://xrpcharts.ripple.com/#/graph/',
          },
          {
            id: 'terra-luna',
            rank: '9',
            symbol: 'LUNA',
            name: 'Terra',
            supply: '358017193.6001373000000000',
            maxSupply: null,
            marketCapUsd: '26977896167.7314977015746132',
            volumeUsd24Hr: '717077661.5611520458651433',
            priceUsd: '75.3536328701090395',
            changePercent24Hr: '-6.9718015374843354',
            vwap24Hr: '78.0913803511067228',
            explorer: 'https://finder.terra.money/',
          },
          {
            id: 'polkadot',
            rank: '10',
            symbol: 'DOT',
            name: 'Polkadot',
            supply: '1074802557.4039600000000000',
            maxSupply: null,
            marketCapUsd: '26676367936.2269610315041655',
            volumeUsd24Hr: '881589157.2105139548606493',
            priceUsd: '24.8197845757458138',
            changePercent24Hr: '-6.2252828583120275',
            vwap24Hr: '25.6430869483064280',
            explorer: 'https://polkascan.io/polkadot',
          },
        ],
      })
    );
  }),

  rest.get(`${baseURL}/assets/*`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          id: 'bitcoin',
          rank: '1',
          symbol: 'BTC',
          name: 'Bitcoin',
          supply: '18932962.0000000000000000',
          maxSupply: '21000000.0000000000000000',
          marketCapUsd: '791966042401.3889832392287620',
          volumeUsd24Hr: '12138429723.0154401547012150',
          priceUsd: '41830.0127788451159010',
          changePercent24Hr: '-2.3211786446242282',
          vwap24Hr: '42208.9787899905220404',
          explorer: 'https://blockchain.info/',
        },
      })
    );
  }),
];