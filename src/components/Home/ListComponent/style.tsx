import {StyleSheet} from 'react-native';
import {darkPurple, whiteColor} from '@utils/constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 0.1
  },
  itemListContainer: {
    flex: 0.8,
    paddingBottom:wp(2.3)
  },
  itemListHeaderContainer: {
    flexDirection: 'row',
    width: wp(30),
    alignItems:'center',
    marginBottom:7
  },
  purpleBorderContainer: {
    height: hp(2.4),
    backgroundColor: darkPurple,
    width: wp(1.3),
  },
  itemListText:{
    fontSize:wp(4.5),
    fontWeight:'400',
    color:whiteColor,
    marginLeft:wp(3)
  }
});
