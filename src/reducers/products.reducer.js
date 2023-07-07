import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    allProducts: [],
    currentDeleteProductId: null,
    actionCurrentDetailsProduct: {},
}


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        actionAllProducts: (state, {payload}) => {
            state.allProducts = [...payload];
        },
        actionCurrentDetailsProduct: (state, {payload}) => {
            state.actionCurrentDetailsProduct = {...payload};
        },
        actionAddNewProduct: (state, {payload}) => {
            state.allProducts = [...state.allProducts, payload];
        },
        actionDeleteProduct: (state, {payload}) => {
            state.currentDeleteProductId = payload;
        },
    }
});

export const {
    actionAllProducts,
    actionAddNewProduct,
    actionDeleteProduct,
    actionCurrentDetailsProduct,
} = productsSlice.actions;

export const actionFetchAllProducts = (URL) => (dispatch) => {
    return axios.get(URL)
        .then(({data}) => {
            dispatch(actionAllProducts(data))
        })
}

export const actionFetchOneProduct = (URL) => (dispatch) => {
    return axios.get(URL)
        .then(({data}) => {
            dispatch(actionCurrentDetailsProduct(data))
        })
}

export const actionFetchAddNewProduct = (URL, product) => (dispatch) => {
    return axios.post(URL, product)
        .then(({data}) => {
            dispatch(actionAddNewProduct(product));
            console.log(data)
        })
}

export const actionFetchDeleteProduct = (URL) => (dispatch) => {
    return axios.delete(URL)
        .then(() => {
            dispatch(actionDeleteProduct(null))
        })
}


export default productsSlice.reducer;