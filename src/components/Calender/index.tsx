import React, {SetStateAction} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {gray} from '@utils/constants/colors';
import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import your preferred icon library

export const CustomCalendar: React.FC = () => {
  const [selected, setSelected] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const renderHeader = () => {
    const handleMonthChange = (newDate: SetStateAction<Date>) => {
      setCurrentDate(newDate);
    };
    const handlePreviousMonth = () => {
      const previousMonth = new Date(currentDate);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      handleMonthChange(previousMonth);
    };

    const handleNextMonth = () => {
      const nextMonth = new Date(currentDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      handleMonthChange(nextMonth);
    };
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.arrowContainer, styles.shadowContainer]}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={handlePreviousMonth}>
            <MaterialIcons name="arrow-back" size={14} color={gray} />
          </TouchableOpacity>
          <View style={styles.monthYearContainer}>
            <>
              <Text style={styles.monthText}>
                {currentDate.toLocaleString('default', {month: 'long'})}
              </Text>
              <View style={styles.redishDot} />
            </>
          </View>
          <TouchableOpacity style={styles.rightIcon} onPress={handleNextMonth}>
            <MaterialIcons name="arrow-forward" size={14} color={gray} />
          </TouchableOpacity>
        </View>

        <View style={[styles.yearContainer, styles.shadowContainer]}>
          <Text style={styles.yearText}>{currentDate.getFullYear()}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <Calendar
      hideDayNames={true}
      hideArrows={true}
      renderHeader={renderHeader}
      current={`${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}`}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true},
      }}
      style={styles.calendar}
      theme={styles.customHeaderStyles}
    />
  );
};
