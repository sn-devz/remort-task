import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
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
