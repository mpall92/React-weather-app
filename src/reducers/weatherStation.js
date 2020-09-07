

export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED";
export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED";


export default function reducer(state = {
  data: null,
  status: null
}, action) {
  switch (action.type) {
    case FETCH_DATA_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        status: "success"
      };
    }
    case FETCH_DATA_REJECTED: {
      return {
        ...state,
        status: "failed"
      };

    }
    default:{
      return state;
    }
  }

}