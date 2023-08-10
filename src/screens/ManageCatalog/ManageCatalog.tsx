import React, {ReactElement} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/Button/Button';
// import {useSelector} from 'react-redux';
// import {TextInput} from 'react-native-paper';
import CustomInput from '../../components/Inputs/CustomTextInput';

import {
  Menu,
  MenuOptions,
  MenuTrigger,
  // MenuItem,
  // MenuDivider,
  MenuProvider,
} from 'react-native-popup-menu';
const ManageCatalog: () => ReactElement = () => {
  // const catagories = useSelector((state: any) => state.catagories.catagories);
  const [text, setText] = React.useState('New Catagory');
  // const onMenuItemSelect = (itemValue: string) => {
  //   console.log('Selected:', itemValue);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.subConatiner}>
        <Text>{text}</Text>
        <CustomInput ctName="Catagory Name" text={text} setText={setText} />
        <View style={styles.rowFlex}>
          <CustomInput
            testID="catagory-name-input" // Set a unique testID here
            ctName="Fields"
            text={text}
            setText={setText}
            width={'60%'}
          />

          <View style={[styles.typeText, styles.txtBorder]}>
            <Text>TEXT</Text>
          </View>
          <TouchableOpacity style={styles.typeText}>
            <Text>D</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text={'TITLE FIELD: UNNAMED FIELD'}
          bgColor={'#9933FF'}
          onPress={() => {}}
          height={'15%'}
        />
        <MenuProvider>
          <Menu>
            <MenuTrigger text="Open Menu" />
            <MenuOptions>
              {/* <MenuItem onPress={() => onMenuItemSelect('Option 1')}>
                Option 1
              </MenuItem>
              <MenuItem onPress={() => onMenuItemSelect('Option 2')}>
                Option 2
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={() => onMenuItemSelect('Option 3')}>
                Option 3
              </MenuItem> */}
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
      <CustomButton
        text={'ADD NEW CATAGORY'}
        bgColor={'#9933FF'}
        onPress={() => {}}
        position="absolute"
        width={'100%' as unknown as number}
        bottom={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  subConatiner: {backgroundColor: 'white', padding: 20},
  typeText: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    marginTop: 5,
  },
  txtBorder: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 7,
    marginLeft: 5,
  },
  rowFlex: {flexDirection: 'row', marginBottom: 5},
});

export default ManageCatalog;
