import {StyleSheet} from 'react-native';
import {darkPurple, whiteColor} from '@utils/constants/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp(4),
  },
  textDescStyle: {
    fontWeight: '300',
    fontSize: wp(4),
    lineHeight: wp(5),
    color: whiteColor,
    width:wp(65)
  },
  getDirectionText: {
    fontWeight: '500',
    lineHeight: wp(7),
    fontSize: wp(3.5),
    color: darkPurple,
    marginLeft: wp(2.5),
  },
  navigationContainer: {
    flexDirection: 'row',
    marginTop: wp(1),
    alignItems: 'center',
  },
  subContainer: {flex: 1.9},
  mapContainer:{flex: 0.8}
});
