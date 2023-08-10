import '@testing-library/jest-native/extend-expect';
import counterReducer from './reducers/counterReducer/counterReducer';
import catagoryReducer from './reducers/catagories/catagories';
import rootReducer from './rootReducer';

describe('Root Reducer', () => {
  test('root reducer', () => {
    const initialState = {
      count: 0,
      catagories: [],
    };
    const action = {
      type: 'SOME_ACTION',
    };

    const sampleState = {
      counter: counterReducer(initialState, action),
      catagories: catagoryReducer(initialState, action),
    };
    const combinedState = rootReducer(sampleState, action);
    expect(combinedState).toEqual(sampleState);
  });
});
