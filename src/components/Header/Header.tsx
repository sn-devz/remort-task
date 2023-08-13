import React from 'react';
import {View, ImageBackground} from 'react-native';
import BackButtonSvg from '@assets/svgs/BackButtonSvg';
import HeartIcon from '@assets/svgs/HeartIcon';
import ShareIcon from '@assets/svgs/ShareIcon';
import {styles} from '@components/Header/style';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@assets/black-shade.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.imgInnerLeftContainer}>
          <BackButtonSvg />
        </View>
        <View style={styles.imgInnerRightContainer}>
          <HeartIcon />
          <ShareIcon/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
