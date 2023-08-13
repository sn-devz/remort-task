import {StyleSheet} from 'react-native';
import {darkPurple} from '@utils/constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: wp(4.2),
  },
  imgStyle: {
    width: wp(4.5),
    height: hp(4.5),
    borderRadius: wp(25),
    borderWidth: 1,
    marginLeft: wp(-2.5),
    aspectRatio: 1,
  },
  lastImgContainer: {
    backgroundColor: darkPurple,
    position: 'absolute',
    width: 39,
    height: 39,
    borderRadius: 100,
    marginLeft: -9.8,
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastImageText: {
    color: 'white',
    position: 'absolute',
    top: wp(3),
    fontSize:wp(3),
    left: -5,
  },
});
