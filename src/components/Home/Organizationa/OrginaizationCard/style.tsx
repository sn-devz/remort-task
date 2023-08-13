import {StyleSheet} from 'react-native';
import {whiteColor, lightPurpleColor} from '@utils/constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    width: wp(92),
    flexDirection: 'row',
    marginRight: wp(4),
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
    borderRadius: wp(4),
  },
  subContainer: {
    marginLeft: wp(2),
    justifyContent: 'space-around',
  },
  textHeadingStyle: {
    fontSize: wp(4.6),
    lineHeight: wp(5.2),
    fontWeight: '500',
    color: whiteColor,
    width: wp(40),
  },

  textContainer: {
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    backgroundColor: lightPurpleColor,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  textStyle: {
    color: whiteColor,
    fontSize: 15,
    borderRadius: 6,
    fontWeight: '600',
  },
});
