import {StyleSheet} from 'react-native';
import { whiteColor} from '@utils/constants/colors';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  textStyle: {
   fontSize:wp(5.4), 
   fontWeight:'500',
   lineHeight:wp(6),
   color:whiteColor,
   marginLeft:wp(4),

  },

});
