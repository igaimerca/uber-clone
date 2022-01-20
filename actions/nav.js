
export const setOrigin = () => async (dispatch) => {
    try {
        const action = { type: "SET_ORIGIN", payload: "data here"};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}

export const setDestination = () => async (dispatch) => {
    try {
        const action = { type: "SET_DESTINATION", payload: "data here"};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}

export const setTravelTimeInformation = () => async (dispatch) => {
    try {
        const action = { type: "SET_TRAVEL_TIME_INFORMATION", payload: "data here"};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}