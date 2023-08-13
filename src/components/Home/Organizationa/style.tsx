import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    width: '100%',
    marginLeft: wp(4),
    marginBottom: wp(3),
  },
});
