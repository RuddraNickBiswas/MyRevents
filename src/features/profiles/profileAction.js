import { LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SELECTED_USER_PROFILE } from "./profileConsteants";

export function listenToCurrentUSerProfile(profile) {
    return {
        type : LISTEN_TO_CURRENT_USER_PROFILE,
        payload : profile
    }
}

export function listenToSelectedUSerProfile(profile) {
    return {
        type : LISTEN_TO_SELECTED_USER_PROFILE,
        payload : profile
    }
}