import catagoryReducer from './catagories';

describe('render catagory', () => {
  it('should add new Catagory with Add type', () => {
    const initailState = {catagories: []};
    const action = {
      type: 'ADD',
      payload: {id: 1, text: 'Category 1', completed: false},
    };

    const newState = catagoryReducer(initailState, action);

    expect(newState.catagories).toHaveLength(1);
    expect(newState.catagories[0]).toEqual(action.payload);
  });

  it('should render with the defauld one', () => {
    const initailState = {catagories: []};
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {id: 2, text: 'Category 2', completed: true},
    };
    const newState = catagoryReducer(initailState, action);

    expect(newState).toEqual(initailState);
  });
});
