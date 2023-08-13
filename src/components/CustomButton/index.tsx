import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ICustomButton} from './CustomButton.type';
import {styles} from './style';

const CustomButton = ({
  backgroundColor,
  justifyContent,
  flex,
  alignItems,
  text,
  borderRadius,
  marginHorizontal,
  onPress,
}: ICustomButton) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor: backgroundColor,
        flex: flex,
        alignItems: alignItems,
        justifyContent: justifyContent,
        borderRadius: borderRadius,
        marginHorizontal: marginHorizontal,
      }}>
      <Text style={styles.textStyle}>Ticket go live {text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
