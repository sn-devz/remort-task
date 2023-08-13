import React from 'react';
import {Text, View} from 'react-native';
import OrganizationImage from '@assets/svgs/OrganizationImage';
import CustomTextBox from '@components/CustomTextBox/CustomTextBox';
import { IItem } from '@components/Home/Organizationa/OrginaizationCard/OrginaizationCard.type';
import { styles } from '@components/Home/Organizationa/OrginaizationCard/style';


const defaultContainerStyle = {
    ...styles.textContainer,
 };
const OrginaizationCard = ({ item }: { item: IItem }) => {
  const {name, source} = item;
  return (
    <View
      style={styles.container}>
      {source === "1"  && <OrganizationImage/> }
      <View style={styles.subContainer}>
        <Text style={styles.textHeadingStyle}>{name}</Text>
        <CustomTextBox
        text={'Follow'}
        textStyle={styles.textStyle}
        {...defaultContainerStyle}
      />
      </View>
    </View>
  );
};

export default OrginaizationCard;
