import {StyleSheet} from 'react-native';
import {gray, whiteColor} from '@utils/constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(4),
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: wp(0.2),
    borderColor: gray,
    borderRadius: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
    height: hp(5),
    marginTop: wp(2),
  },
  textStyle: {
    color: whiteColor,
    paddingHorizontal: wp(4.5),
  },
});
