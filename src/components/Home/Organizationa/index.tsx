import React from 'react';
import {FlatList, View} from 'react-native';
import { useFetchData } from '@hooks/useFetchData';
import OrginaizationCard from '@components/Home/Organizationa/OrginaizationCard';
import { styles } from '@components/Home/Organizationa/style';

const Organizations = () => {
  const {data :{organized = []}} = useFetchData();
  return (
    <View style={styles.container}>
      <FlatList
        data={organized}
        horizontal
        style={styles.flatList}
        keyExtractor={({source}) => source}
        renderItem={({item}) => <OrginaizationCard item={item}/>}
      />
    </View>
  );
};
export default Organizations;
