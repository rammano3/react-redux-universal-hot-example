const LOAD = 'redux-example/items/LOAD';
const LOAD_SUCCESS = 'redux-example/items/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/items/LOAD_FAIL';
const VOTE = 'redux-example/items/VOTE';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    case VOTE:
      console.log('________item reducer vote ', action);
      return state;
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.items && globalState.items.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/item/load')
  };
}

export function vote(voteData) {
  console.log('vote reduce vote ', voteData);
  return {
    type: VOTE,
    promise: (client) => client.post('/item/vote', {
      data: voteData
    })
  };
}
