import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useCommomHook} from '@hooks/useCommomHook';
import {IHome} from '@components/Home/Home.type';
import {styles} from "@components/Home/style";

const ReadMoreText = ({content, maxLength}: IHome) => {
  const {truncatedContent, toggleContentDisplay, showFullContent} = useCommomHook(
    {content, maxLength},
  );
  return (
    <View>
      <Text style={styles.headingDescText}>
        {truncatedContent}
        {content.length > maxLength && (
          <TouchableOpacity onPress={toggleContentDisplay}>
            <Text style={styles.readMoreBtn}>
              {showFullContent ? ' Read Less' : ' Read More'}
            </Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  );
};

export default ReadMoreText;
