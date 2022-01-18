export interface Coin {
  id: string /* unique identifier for asset */;
  rank: number /* rank is in ascending order - this number is directly associated with the marketcap whereas the highest marketcap receives rank 1 */;
  symbol: string /* most common symbol used to identify this asset on an exchange */;
  name: string /* proper name for asset */;
  supply: number /* available supply for trading */;
  maxSupply: number | null /* total quantity of asset issued */;
  marketCapUsd: number /* supply x price */;
  volumeUsd24Hr: number /* quantity of trading volume represented in USD over the last 24 hours */;
  priceUsd: number /* volume-weighted price based on real-time market data, translated to USD */;
  changePercent24Hr: number /* the direction and value change in the last 24 hours */;
  vwap24Hr: number /* Volume Weighted Average Price in the last 24 hours */;
}
