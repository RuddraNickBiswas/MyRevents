import { LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SELECTED_USER_PROFILE } from "./profileConsteants";

const initialStae = {
  currentUserProfile: null,
  selectedUserProfile :null,
};

export default function profileReducer(state = initialStae, { type, payload }) {
  switch (type) {
    case LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload,
      };
      case LISTEN_TO_SELECTED_USER_PROFILE:
        return {
          ...state,
          selectedUserProfile: payload,
        };
    default: {
      return state;
    }
  }
}
