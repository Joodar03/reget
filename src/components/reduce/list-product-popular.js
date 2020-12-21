const initialState = {
    data: {results:[]},
    loading: false
}
const REQUEST_PRODUCT = "FETCH_REQUEST_PRODUCT";
const REQUEST_ADD = 'FETCH_ADD_PRODUCT'
const ListProductPopular = (state=initialState,action) => {

    switch (action.type) {
        case REQUEST_PRODUCT:
            return {...state,loading: true}
        case REQUEST_ADD:
            return  {data:action.payload,loading: false}
        default:state
    }
}
export const requestProduct = () => {
    return {type:REQUEST_PRODUCT}
}
const addProduct = (data) => {
    return {type: REQUEST_ADD}
}
export const getProduct = (dispatch) => {
    dispatch(requestProduct())
    dispatch(addProduct(data))
}
export default  ListProductPopular