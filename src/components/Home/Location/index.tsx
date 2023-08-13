import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import MapImage from '@assets/svgs/MapImage';
import NavigationIcon from '@assets/svgs/NavigationIcon';
import {useFetchData} from '@hooks/useFetchData';
import {styles} from '@components/Home/Location/style';

const Loaction: React.FC = () => {
  const {
    data: {loaction = ''},
  } = useFetchData();
  const openGoogleMaps = () => {
    const query = loaction;
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;

    Linking.openURL(url).catch(err =>
      console.error('Error opening Google Maps:', err),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textDescStyle}>{loaction}</Text>
        <TouchableOpacity
          style={styles.navigationContainer}
          onPress={openGoogleMaps}>
          <NavigationIcon />
          <Text style={styles.getDirectionText}>Get directions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mapContainer}>
        <MapImage />
      </View>
    </View>
  );
};

export default Loaction;
