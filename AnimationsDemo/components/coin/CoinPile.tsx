import { View } from '../Themed';
import { CoinIcon } from './CoinIcon';

export type Props = {
  width?: number;
  height?: number;
  coins: number;
};

const randomLefts = Array<number>();
for(let i=0; i<200; i++) {
  randomLefts.push(Math.random() * 8)
}
// console.log('CoinPile parse');

export const CoinPile: React.FC<Props> = (props: Props) => {
  const coins = [];
  for(let a=0; a<props.coins; a++) {
    coins.push(<CoinIcon key={a} style={{marginLeft: randomLefts[a], marginBottom: -16, zIndex: a}} />);
  }
  // console.log('CoinPile render');
  return (
      <View>
        {coins.reverse()}
      </View>
  )
}
