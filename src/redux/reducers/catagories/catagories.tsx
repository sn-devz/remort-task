interface Catagory {
  id: number;
  text: string;
  completed: boolean;
}
interface CatagoriesState {
  catagories: Catagory[];
}

const initialState: CatagoriesState = {
  catagories: [],
};

const catagoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        catagories: [
          ...state.catagories,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    // case 'DELETE':
    //   return {
    //     ...state,
    //     count: state.catagories - 1,
    //   };
    // case 'UPDATE':
    //   return {
    //     ...state,
    //     count: state.catagories - 1,
    //   };
    default:
      return state;
  }
};

export default catagoryReducer;
