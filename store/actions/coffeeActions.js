import * as actionTypes from "./types";

import axios from "axios";

export const setCoffeeShopsLoading = () => ({

    type: actionTypes.COFFEESHOPS_LOADING
});


export const getCoffeeShops = () => {
    return async dispatch => {
        try {
            const res = await axios.get("http://178.128.114.232/api/?format=json");
            const coffeeShops = res.data;
            dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: coffeeShops });
        } catch (err) {
            console.error(err);
        }
    };
};

