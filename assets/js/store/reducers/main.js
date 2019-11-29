import * as actionTypes from '../actions/actionTypes';
import registrationData from "../../containers/Home/fakeReservationData.json"

const initialState = {
    registrationData: registrationData,
    token: 1,
    loading: false,
    user: {
        id:51,
        name: null,
        lastname: null,
        activeCar: null
    },
    users: [],
    reservationStatus: [],
    popup: {
        loading: true,
        width: 'calc(100%+30px)',
        left: '0px'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { 
                ...state,
                token: true
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null
            }
        case actionTypes.GET_HOME_DATA_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_HOME_DATA_SUCCESS:
            return {
                ...state,
                reservationStatus: action.data,
                user: action.user,
                loading: false
            }
        case actionTypes.GET_HOME_DATA_FAIL:
            return {
                ...state,
                reservationStatus: action.data,
                user: action.user,
                loading: false
            }
        case actionTypes.GET_HOME_USERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_HOME_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case actionTypes.SAVE_COORDINATES:
            return {
                ...state,
                popup: {
                    ...state.popup,
                    loading: false,
                    width: action.width,
                    left: action.left
                }
            }
        case actionTypes.NO_COORDINATES:
            return {
                ...state,
                popup: {
                    ...state.popup,
                    loading: false
                }
            }
        default: return state
    }
}

export default reducer;