import {combineReducers} from "redux";
import userReduce from "./user-reduce";
import {reducer as formReducer} from 'redux-form'
import ListProductPopular from "./list-product-popular";

const reduce = combineReducers({
    user: userReduce,
    form: formReducer,
    productPopular: ListProductPopular
})

export default reduce;