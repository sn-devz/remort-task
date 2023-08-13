import React from 'react';
import {View, Modal, NativeSyntheticEvent} from 'react-native';
import {styles} from './style';

export const CustomModal = ({
  isCalendarVisible,
  handleCalendar,
  children,
}: {
  children: React.ReactNode;
  isCalendarVisible:boolean;
  handleCalendar:  ((event: NativeSyntheticEvent<any>) => void) | undefined
}) => {
  return (
    <Modal
      visible={isCalendarVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleCalendar}
      style={styles.modalContainer}
      >
      <View style={styles.modalSubContainer}>
        <View style={styles.childContainerBorder}>{children}</View>
      </View>
    </Modal>
  );
};
