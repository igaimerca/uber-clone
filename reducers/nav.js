
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export default(nav = initialState, action) => {
    switch (action.type) {
        case "SET_ORIGIN" :
            return action.payload;
        case "SET_DESTINATION":
            return action.payload;
        case "SET_TRAVEL_TIME_INFORMATION" :
            return action.payload;
        default :
           return nav;
    }
}