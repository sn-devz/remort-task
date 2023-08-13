import React from 'react';
import {Text, View} from 'react-native';
import { useFetchData } from '@hooks/useFetchData';
import CustomTextBox from '@components/CustomTextBox/CustomTextBox';
import {styles} from '@components/Home/style';
import ReadMoreText from '@components/Home/ItemHeader/ReadMoreText';

const defaultContainerStyle = {
  ...styles.textContainer,
  ...styles.customTextContainerWithOutPos,
};
const ItemHeader = () => {
  const {data: {name = '', description=''}}  = useFetchData()
  return (
    <View style={styles.itemHeaderContainer}>
      <CustomTextBox
        text={'FROM £ 25.00'}
        textStyle={styles.textStyle}
        {...defaultContainerStyle}
      />
      <Text style={styles.headingText}>{name}</Text>
      <ReadMoreText content={description} maxLength={60} />
    </View>
  );
};
export default ItemHeader;
