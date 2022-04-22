import { View } from '../Themed';
import { CoinPile } from './CoinPile';
import { useEffect, useState } from 'react';

export type Props = {
  width?: number;
  height?: number;
  fromCoins: number;
  toCoins: number;
  timeMillis: number;
};

export const CoinPileAnim: React.FC<Props> = (props: Props) => {
  const [coins, setCoins] = useState(props.fromCoins);
  
  let add = (props.toCoins - props.fromCoins)/(props.timeMillis/100)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('H')
      if((coins<=props.toCoins && add<0) ||
        (coins>=props.toCoins && add>0)) {
        clearTimeout(timer);
      } else {
        setCoins(coins+add)
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    }
  }, [coins]);
  
  return (
      <View>
        <CoinPile width={props.width} height={props.height} coins={coins} />
      </View>
  )
}
