import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from '@components/Home/ListComponent/style';
import ItemList from '@components/Home/ListComponent/ItemList';
import Catetories from '@components/Home/Category';
import DateAndTime from '@components/Home/DateAndTime';
import Loaction from '@components/Home/Location';
import Organizations from '@components/Home/Organizationa';
import Participants from '@components/Home/Participants';
import {IComponentList} from './ListComponent.type';

const ListComponent = () => {
  const componentList = [
    {
      name: 'Participants',
      source: <Participants />,
    },
    {
      name: 'Categories',
      source: <Catetories />,
    },
    {
      name: 'Date & Time',
      source: <DateAndTime />,
    },
    {
      name: 'Location',
      source: <Loaction />,
    },
    {
      name: 'Organied by',
      source: <Organizations />,
    },
  ];

  return (
    <View style={styles.container}>
      {componentList.map(({name, source}: IComponentList) => (
        <ItemList key={name} text={name}>
          {source}
        </ItemList>
      ))}
    </View>
  );
};

export default ListComponent;
