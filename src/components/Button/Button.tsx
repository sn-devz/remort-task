import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from 'react-native';

interface IValues {
  bgColor?: string;
  height?: number;
  width?: number | undefined;
  text?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  position?: 'relative' | 'absolute' | undefined;
  bottom?: number;
}

const CustomButton = (values: IValues) => {
  const {
    text = '',
    bgColor = '9933FF',
    onPress = () => {},
    position = 'relative',
    width,
    height,
  } = values;
  return (
    <TouchableOpacity
      testID="btnId"
      style={[
        styles.btnStyle,
        {
          backgroundColor: bgColor,
          position: position,
          width: width,
          height: height,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.btnTextColor}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 15,
  },
  btnTextColor: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default CustomButton;
