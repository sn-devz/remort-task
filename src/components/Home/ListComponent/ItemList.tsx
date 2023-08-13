import React from 'react';
import {View, Text} from 'react-native';
import {IItemList, IText} from '@components/Home/ListComponent/ListComponent.type';
import {styles} from '@components/Home/ListComponent/style';

const ItemListHeader = ({text}: IText) => (
  <View style={styles.itemListHeaderContainer}>
    <View style={styles.purpleBorderContainer} />
    <Text style={styles.itemListText}>{text}</Text>
  </View>
);

const ItemList = ({children, text}: IItemList) => {
  return (
    <View style={styles.itemListContainer}>
      <ItemListHeader text={text} />
      {children}
    </View>
  );
};

export default ItemList;
