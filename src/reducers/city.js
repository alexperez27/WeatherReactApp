import {SET_CITY} from "../actions";

export const city = (state = null, action) => {
    switch (action.type) {
        case SET_CITY:
            //return {...state, city: action.payload};
            return action.payload;
        default:
            return state;
    }
}
