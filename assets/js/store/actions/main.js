import * as actionTypes from './actionTypes';

export const login = (id) => {
    return {
        type: actionTypes.LOGIN,
        id
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const getHomeDataStart = () => {
    return {
        type: actionTypes.GET_HOME_DATA_START
    }
}

export const getHomeDataSuccess = (data, user) => {
    return {
        type: actionTypes.GET_HOME_DATA_SUCCESS,
        data,
        user
    }
}

export const getHomeDataFail = (data, user) => {
    return {
        type: actionTypes.GET_HOME_DATA_FAIL,
        data,
        user
    }
}

export const getHomeUsersStart = () => {
    return {
        type: actionTypes.GET_HOME_USERS_START
    }
}

export const getHomeUsersSuccess = (users) => {
    return {
        type: actionTypes.GET_HOME_USERS_SUCCESS,
        users
    }
}


export const saveCoordinates = (left, width) => {
    return {
        type: actionTypes.SAVE_COORDINATES,
        left,
        width
    }
}

export const noCoordinates = () => {
    return {
        type: actionTypes.NO_COORDINATES
    }
}

export const buttonClicked = (date, buttonType, switchUser) => {
    return {
        type: actionTypes.BUTTON_CLICKED,
        date,
        buttonType,
        switchUser
    }
}

export const popupCancel = () => {
    return {
        type: actionTypes.POPUP_CANCEL
    }
}

export const popupAcceptStart = () => {
    return {
        type: actionTypes.POPUP_ACCEPT_START
    }
}

export const popupAcceptSuccess = () => {
    return {
        type: actionTypes.POPUP_ACCEPT_SUCCESS
    }
}

export const popupSuccess = () => {
    return {
        type: actionTypes.POPUP_SUCCESS
    }
}

export const popupStyleReset = () => {
    return {
        type: actionTypes.POPUP_STYLE_RESET
    }
}

export const openMobileMenu = () => {
    return {
        type: actionTypes.OPEN_MENU
    }
}

export const closeMobileMenu = () => {
    return {
        type: actionTypes.CLOSE_MENU
    }
}

export const updatePlate = (numbers) => {
    return {
        type: actionTypes.UPDATE_PLATE,
        numbers
    }
}

export const fetchOneDayDataStart = (date) => {
    return {
        type: actionTypes.FETCH_ONE_DAY_DATA_START,
        date
    }
}

export const fetchOneDayDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ONE_DAY_DATA_SUCCESS,
        data
    }
}

export const setNotification = () => {
    return {
        type: actionTypes.SET_NOTIFICATION
    }
}

export const notificationPopupCancel = () => {
    return {
        type: actionTypes.NOTIFICATION_POPUP_CANCEL
    }
}

export const notificationPopupAcceptStart = () => {
    return {
        type: actionTypes.NOTIFICATION_POPUP_ACCEPT_START
    }
}

export const notificationPopupAcceptSuccess = () => {
    return {
        type: actionTypes.NOTIFICATION_POPUP_ACCEPT_SUCCESS
    }
}

export const popupOpenedStart = () => {
    return {
        type: actionTypes.POPUP_OPENED_START
    }
}

export const popupOpenedReset = () => {
    return {
        type: actionTypes.POPUP_OPENED_RESET
    }
}

export const openModal = () => {
    return {
        type: actionTypes.OPEN_PLATE_MODAL
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_PLATE_MODAL
    }
}

export const postAway = (data) => {
    return {
        type: actionTypes.POST_AWAY_DATES,
        data: data
    }
};