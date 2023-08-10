import React from 'react';
import {DimensionValue} from 'react-native';
import {TextInput} from 'react-native-paper';

interface IProps {
  ctName?: string;
  setText?: Function;
  text?: string;
  width?: DimensionValue | undefined;
  testID?: string;
}

const CustomInput = (props: IProps) => {
  const {
    ctName = 'Fields',
    text = '',
    setText = () => {},
    width = '100%',
    testID = '',
  } = props;
  return (
    <TextInput
      testID={testID}
      label={ctName}
      value={text}
      mode="outlined"
      style={{width: width}}
      onChangeText={text => setText(text)}
    />
  );
};

export default CustomInput;
