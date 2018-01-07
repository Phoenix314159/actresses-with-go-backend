import {combineReducers} from 'redux'
import getDataReducer from './getDataReducer'
import paginateReducer from './paginateReducer'
import openPopUpReducer from './openPopUpReducer'
import hideButtonReducer from './hideButtonReducer'

export default combineReducers({
  main: getDataReducer,
  paginate: paginateReducer,
  open: openPopUpReducer,
  hideButton: hideButtonReducer
})

