import React from 'react';
import {Text, View} from 'react-native';

const CustomTextBox= (props: {text: string, textStyle:object}) => {
  const {text = '', textStyle = {}} = props;
  return <View  {...props}><Text style={{...textStyle}}>{text}</Text></View>;
};
export default CustomTextBox;
