import React from 'react';
import {View, Image} from 'react-native';
import CustomTextBox from '@components/CustomTextBox/CustomTextBox';
import Header from '@components/Header/Header';
import {styles} from '@components/Home/style';

const defaultContainerStyle = {
  ...styles.textContainer,
  ...styles.customTextContainer,
};
const PreviewEvent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="stretch"
        source={require('@assets/preview-event.png')}
      />
      <Header />
      <CustomTextBox
        text={'SOLD OUT!!!'}
        textStyle={styles.textStyle}
        {...defaultContainerStyle}
      />
    </View>
  );
};

export default PreviewEvent;
