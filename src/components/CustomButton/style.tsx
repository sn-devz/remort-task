import {StyleSheet} from 'react-native';
import { whiteColor } from '@utils/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },
  textStyle:{
    lineHeight:21.6,
    fontWeight:'500',
    color:whiteColor,
    fontSize:18
  }
  
});
