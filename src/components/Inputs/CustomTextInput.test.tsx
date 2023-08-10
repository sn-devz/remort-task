import React from 'react';
import {act, fireEvent, render} from '../../../test-utils';
import '@testing-library/jest-native/extend-expect';
import CustomInput from './CustomTextInput';

describe('CustomInput', () => {
  test('render the input', () => {
    jest.useFakeTimers(); // Use fake timers

    const setText = jest.fn();
    const {getByTestId} = render(
      <CustomInput
        ctName="Fields"
        text="Initial text"
        setText={setText}
        width={200}
        testID="custom-input"
      />,
    );

    const element = getByTestId('custom-input');
    console.log(element.props);
    expect(element).toBeTruthy();

    // expect(element.props.label).toBe('Fiels');
    expect(element.props.value).toBe('Initial text');
    // expect(element.props.mode).toBe('outlined');
    // expect(element.props.style).toEqual({width: 200});

    act(() => {
      fireEvent.changeText(element, 'New text');
    });
    expect(setText).toHaveBeenCalledWith('New text');
    // jest.runAllTimers(); // Run all fake timers
  });
});
