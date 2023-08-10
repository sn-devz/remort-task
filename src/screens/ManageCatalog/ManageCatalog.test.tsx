import React from 'react';
import {act, fireEvent, render} from '../../../test-utils';
import '@testing-library/jest-native/extend-expect';
import {useNavigation} from '@react-navigation/native';
import ManageCatalog from './ManageCatalog';

jest.mock('@react-navigation/native');

describe('Manage Catagory', () => {
  test('render text', () => {
    jest.useFakeTimers(); // Use fake timers

    // const setText = jest.fn();

    const {getByText, getByTestId} = render(<ManageCatalog />);
    const text = getByText('New Catagory');
    const text1 = getByText('TEXT');
    const text2 = getByText('D');

    const input1 = getByTestId('catagory-name-input');
    // const input2 = getByTestId('aaaa');
    const btn1 = getByText('TITLE FIELD: UNNAMED FIELD');
    const btn2 = getByText('ADD NEW CATAGORY');

    expect(text).toBeTruthy();
    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();

    expect(input1.props.value).toBe('New Catagory');
    // expect(input2).toBeTruthy();
    // act(() => {
    //   fireEvent.changeText(input1, 'New text');
    // });
    // expect(setText).toHaveBeenCalledWith('New text');

    expect(btn1).toBeTruthy();
    expect(btn2).toBeTruthy();
  });
});
