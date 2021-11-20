import {combineReducers,applyMiddleware} from 'redux'
import Cart from './Cart'
import Product from './Product'
import Search from './Search'

export default combineReducers({
    Cart,
    Product,
    Search,

})
