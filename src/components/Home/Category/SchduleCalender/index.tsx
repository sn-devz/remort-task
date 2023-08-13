import React from 'react';
import {View} from 'react-native';
import CalenderSvg from '@assets/svgs/Calender';
import {useCommomHook} from '@hooks/useCommomHook';
import {useFetchData} from '@hooks/useFetchData';
import {dartYellow} from '@utils/constants/colors';
import {CustomCalendar} from '@components/Calender';
import CustomButton from '@components/CustomButton';
import {CustomModal} from '@components/Modal';
import {styles} from './style';

const SchduleCalender: React.FC = () => {
  const {addToCalendar, handleCalendar, isCalendarVisible} = useCommomHook({});
  const {
    data: {tickeTime = ''},
  } = useFetchData();
  const handleCalendarButtonPress = () => {
    addToCalendar();
  };

  return (
    <View style={styles.container}>
      <CalenderSvg onPress={handleCalendarButtonPress} />
      <CustomButton
        backgroundColor={dartYellow}
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        marginHorizontal={10}
        text={tickeTime}
        onPress={handleCalendar}
      />
      <CustomModal
        isCalendarVisible={isCalendarVisible}
        handleCalendar={handleCalendar}>
        <CustomCalendar />
      </CustomModal>
    </View>
  );
};
export default SchduleCalender;
