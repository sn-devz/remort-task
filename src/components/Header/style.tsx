import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height:hp("50")
  },
  image: {
    width: '100%',
    height: 152,
    flexDirection:'row',
  },
  imgInnerLeftContainer: {
    flex: 1,
    padding: '5%',
    flexDirection:'row',
  },
  imgInnerRightContainer: {
    flex: 1,
    padding: '5%',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
});
