import React, {ReactElement} from 'react';
// import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const DashBoard: () => ReactElement = () => {
  // const count = useSelector((state: any) => state.counter.count);
  const navigation = useNavigation();

  const navigateToNext = () => navigation.navigate('ManageCatagory');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>No Catagories found</Text>
      <CustomButton
        text={'ADD A CATAGORY'}
        bgColor={'#9933FF'}
        onPress={navigateToNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginBottom: 10,
  },
});

export default DashBoard;
