

const ASYNC_ASCTION_START = "ASYNC_ASCTION_START";
const ASYNC_ASCTION_FINISH = "ASYNC_ASCTION_FININS";
const ASYNC_ASCTION_ERROR = "ASYNC_ASCTION_ERROR";

export function asyncActionStart() {
  return {
    type: ASYNC_ASCTION_START,
  };
}

export function asyncActionFinish() {
  return {
    type: ASYNC_ASCTION_FINISH,
  };
}

export function asyncActionError(error) {
  return {
    type: ASYNC_ASCTION_ERROR,
    payload: error,
  };
}

const initialState = {
  loading: false,
  error: null,
};

export default function asyncReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ASYNC_ASCTION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ASYNC_ASCTION_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ASCTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
