import React from 'react';
import {fireEvent, render} from '../../../test-utils';
import CustomButton from './Button';
import '@testing-library/jest-native/extend-expect';

describe('Custom Btn', () => {
  test('Render Buuton', () => {
    const {getByTestId} = render(
      <CustomButton
        text={''}
        bgColor={'9933FF'}
        onPress={() => {}}
        position="relative"
        width={0}
        height={0}
      />,
    );
    const button = getByTestId('btnId');
    expect(button).toBeTruthy();

    expect(button).toHaveStyle({
      backgroundColor: '9933FF',
      position: 'relative',
    });
    expect(button).toHaveStyle({width: 0, height: 0});
  });

  test('call when btn click', () => {
    const btnClickMock = jest.fn();
    const {getByTestId} = render(<CustomButton onPress={btnClickMock} />);
    const btn = getByTestId('btnId');
    fireEvent.press(btn);
    expect(btnClickMock).toHaveBeenCalledTimes(1);
    expect(btnClickMock).toHaveBeenCalled();
  });
});
