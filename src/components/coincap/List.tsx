import Link from 'next/link';
import classNames from 'classnames';
import { Heading, CustomLink } from '@/components/ui';
import { useCoincapAssets } from '@/hooks/useCoincap';
import { Coin } from '@/types';

const AssetsList = () => {
  const { data, isLoading, isError } = useCoincapAssets();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // console.log('🚀 ~ file: index.tsx ~ line 10 ~ data', data);

  return (
    <div className="flex flex-col gap-4">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-4">
              <div>{item.rank}</div>
              <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt={item.id} className="w-8 h-8" />
              <div>
                <strong>{item.name}</strong>
                <br />
                <span className="text-sm">{item.symbol}</span>
              </div>
              <div>{item.priceUsd}</div>
              <div className={`${item.changePercent24Hr > 0 ? 'text-success-500' : 'text-error-500'} `}>{item.changePercent24Hr}</div>
            </div>
          );
        })}
    </div>
  );
};

export default AssetsList;
