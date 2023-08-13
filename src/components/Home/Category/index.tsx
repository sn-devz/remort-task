import React from 'react';
import {View, FlatList, Text} from 'react-native';
import { useFetchData } from '@hooks/useFetchData';
import SchduleCalender from '@components/Home/Category/SchduleCalender';
import {styles} from '@components/Home/Category/style';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.itemContainer}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);
const Catetories = () => {
  const {data:{catagory = []}} = useFetchData()
  return (
    <View style={styles.container}>
      <FlatList
        data={catagory}
        horizontal
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item}
      />
      <SchduleCalender />
    </View>
  );
};

export default Catetories;
