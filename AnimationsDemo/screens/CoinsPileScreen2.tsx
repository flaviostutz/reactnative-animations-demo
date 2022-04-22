import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { CoinPileAnim } from '../components/coin/CoinPileAnim';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <CoinPileAnim fromCoins={20} toCoins={15} timeMillis={1000} />
      {/* <Button onPress={()=>{setValue(value+2000)}} title='More!' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50
  }
});
