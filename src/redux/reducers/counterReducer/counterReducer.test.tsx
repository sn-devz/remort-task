import counterReducer from './counterReducer';

describe('render counter reducer', () => {
  it('INCREMENT', () => {
    const initailState = {count: 5};
    const action = {
      type: 'INCREMENT',
      payload: 1,
    };
    const expectedCount = {count: 6};

    const newState = counterReducer(initailState, action);

    expect(newState).toEqual(expectedCount);
  });
  it('DECREMENT', () => {
    const initailState = {count: 5};
    const action = {
      type: 'DECREMENT',
      payload: 1,
    };
    const expectedCount = {count: 4};

    const newState = counterReducer(initailState, action);
    expect(newState).toEqual(expectedCount);
  });

  it('DEFAULT', () => {
    const initailState = {count: 5};
    const action = {
      type: 'DEFAULT',
      payload: 1,
    };

    const newState = counterReducer(initailState, action);
    expect(newState).toEqual(initailState);
  });
});
