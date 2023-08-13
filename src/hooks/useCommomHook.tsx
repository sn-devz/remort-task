import React from 'react';
import {IUseCommonHook} from '@hooks/Hooks.type';
import {Alert} from 'react-native';
import {useFetchData} from '@hooks/useFetchData';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

export const useCommomHook = ({maxLength = 30}: IUseCommonHook) => {
  const [showFullContent, setShowFullContent] = React.useState(false);
  const [isCalendarVisible, setCalendarVisibility] = React.useState(false);

  const {
    data: {participants = [], description},
  } = useFetchData();

  const truncatedContent = showFullContent
    ? description
    : description?.slice(0, maxLength) +
      (description?.length > maxLength ? '...' : '');

  const selectOnlyFirstFourImages =
    participants?.length > 4 ? participants?.slice(0, 4) : participants;

  const showLastImageCover = (index: number) =>
    index === selectOnlyFirstFourImages?.length - 1 &&
    selectOnlyFirstFourImages?.length > 3;

  const handleCalendar = () => {
    setCalendarVisibility(!isCalendarVisible);
  };

  const addToCalendar = async () => {
    try {
      const eventConfig = {
        title: 'Demo Event',
        startDate: '2023-08-12T10:00:00.000Z',
        endDate: '2023-08-12T12:00:00.000Z',
        location: 'Demo Location',
        notes: 'Demo Notes',
      };

      const success = await AddCalendarEvent.presentEventCreatingDialog(
        eventConfig,
      );
      if (success) {
        Alert.alert('Success', 'Event added to calendar!');
      } else {
        Alert.alert('Error', 'Failed to add event to calendar.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const toggleContentDisplay = () => {
    setShowFullContent(!showFullContent);
  };

  return {
    showFullContent,
    toggleContentDisplay,
    truncatedContent,
    selectOnlyFirstFourImages,
    showLastImageCover,
    imagesLenght: participants.length,
    addToCalendar,
    handleCalendar,
    isCalendarVisible,
  };
};
