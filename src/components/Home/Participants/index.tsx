import React from 'react';
import {Image, Text, View} from 'react-native';
import {useCommomHook} from '@hooks/useCommomHook';
import {styles} from '@components/Home/Participants/style';

const Participants = () => {
  const {showLastImageCover, selectOnlyFirstFourImages, imagesLenght} =
    useCommomHook({});
  return (
    <View style={styles.container}>
      {selectOnlyFirstFourImages?.map((item: string, index: number) => (
        <>
          <View key={index}>
            <Image
              resizeMode="contain"
              style={styles.imgStyle}
              source={require(`../../../assets/p1.png`)}
            />
            {showLastImageCover(index) && (
              <>
                <View style={styles.lastImgContainer} />
                <Text style={styles.lastImageText}>+{imagesLenght}K</Text>
              </>
            )}
          </View>
        </>
      ))}
    </View>
  );
};

export default Participants;
