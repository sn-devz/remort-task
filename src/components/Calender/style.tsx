import {Platform, StyleSheet} from 'react-native';
import {dartGray, gray, redishColor, whiteColor} from '@utils/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  calendar: {
    backgroundColor: 'transparent', // Set the background color to transparent
    width: 300,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  dayContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: 32,
    height: 32,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 13,
    // backgroundColor:'red',
    marginLeft: -5,
    width: 269,
    flex: 1,
  },
  arrowContainer: {
    flexDirection: 'row',
    backgroundColor: dartGray,
    // marginRight: 10,
    flex: 0.7,
    padding: 13,
    borderRadius: 9,
  },
  monthYearContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  yearContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dartGray,
    flex: 0.3,
    padding: 13,
    borderRadius: 9,
    marginLeft: 10,
  },
  shadowContainer: {
    shadowColor: 'rgba(255, 255, 255, 0.8)', // White shadow color
    ...Platform.select({
      ios: {
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {width: -4, height: -4},
      },
      android: {
        elevation: 5, // Elevation adds shadow for Android
      },
    }),
  },
  monthText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  yearText: {
    fontSize: 12,
    fontWeight: '500',
    color: whiteColor,
  },

  leftIcon: {
    flex: 0.6,
    justifyContent: 'center',
  },
  rightIcon: {
    flex: 0.6,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  customHeaderStyles: {
    backgroundColor: 'transparent', // Set the background color to transparent
    calendarBackground: dartGray,
    textSectionTitleColor: whiteColor,
    selectedDayBackgroundColor: redishColor,
    selectedDayTextColor: whiteColor,
    todayTextColor: whiteColor,
    todayBackgroundColor: redishColor,
    dayTextColor: whiteColor,
    textDayFontSize: 13,
    textDisabledColor: gray,

    'stylesheet.calendar.main': {
      monthView: {
        borderRadius: 16, // Apply the desired border radius
        backgroundColor: dartGray,
        padding: 15,

        shadowColor: 'rgba(255, 255, 255, 0.8)', // White shadow color
        ...Platform.select({
          ios: {
            shadowOpacity: 0.65,
            shadowRadius: 3.1,
            shadowOffset: {width: -2, height: -5},
          },
          android: {
            elevation: 5, // Elevation adds shadow for Android
          },
        }),
      },
    },
  },
  redishDot: {
    height: 5,
    width: 5,
    backgroundColor: redishColor,
    borderRadius:2.5,
    marginLeft:5
  },
});
