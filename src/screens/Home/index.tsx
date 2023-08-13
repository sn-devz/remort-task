import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ItemHeader from '@components/Home/ItemHeader';
import ListComponent from '@components/Home/ListComponent';
import PreviewEvent from '@components/Home/PreviewEvent';
import {styles} from '@screens/Home/style';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollViewContainer}>
        <PreviewEvent />
        <ItemHeader />
        <ListComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
