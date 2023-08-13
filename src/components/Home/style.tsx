import {StyleSheet} from 'react-native';
import {
  whiteColor,
  redishColor,
  lightPurpleColor,
  gray,
  darkPurple,
} from '@utils/constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('40'),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    backgroundColor: redishColor,
    borderRadius: wp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  customTextContainer: {
    position: 'absolute',
    backgroundColor: redishColor,
    bottom: hp('1.2'),
    left: hp('2'),
  },
  textStyle: {
    color: whiteColor,
    fontSize: wp(3.3),
    borderRadius: wp(6),
    fontWeight: '600',
  },
  customTextContainerWithOutPos: {
    backgroundColor: lightPurpleColor,
    width: wp(30),
    height:hp(3.5)
  },
  headingText: {
    fontSize: wp(6),
    lineHeight: wp(8),
    fontWeight: '500',
    color: whiteColor,
    marginTop: wp(2),
  },
  itemHeaderContainer: {
    marginLeft: wp(4),
    marginRight: wp(5),
    marginVertical: wp(4),
  },
  headingDescText: {
    fontWeight: '500',
    fontSize: wp(3.7),
    lineHeight: wp(5),
    color: gray,
  },
  readMoreBtn: {
    color: darkPurple,
    fontSize: wp(3.5),
    lineHeight: wp(5),
    fontWeight: '500',
    marginTop:wp(5.6)
  },
});
