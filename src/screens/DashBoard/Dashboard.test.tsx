import React from 'react';
import {fireEvent, render} from '../../../test-utils';
import '@testing-library/jest-native/extend-expect';
import DashBoard from './Dashboard';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native');
jest.mock('../../hooks/useRequestProcess', () => ({
  useRequestProcess: () => {
    const mockUsePosts = jest.fn();
    mockUsePosts.mockReturnValue({
      data: null,
      isLoading: false,
      isSuccess: false,
    });
    return {usePosts: mockUsePosts};
  },
}));

describe('DashBoard', () => {
  test('render text', () => {
    const {getByText} = render(<DashBoard />);
    const text = getByText('No Catagories found');
    expect(text).toBeTruthy();
  });
  test('render button', () => {
    const {getByText} = render(<DashBoard />);
    const btnText = getByText('ADD A CATAGORY');
    expect(btnText).toBeTruthy();
  });

  test('render button and click event', () => {
    const navigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({navigate});

    const {getByText} = render(<DashBoard />);
    const btnText = getByText('ADD A CATAGORY');
    fireEvent.press(btnText);
    expect(navigate).toHaveBeenCalledWith('ManageCatagory');
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
