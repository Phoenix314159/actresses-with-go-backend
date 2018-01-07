import types from '../actions/types'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.HIDE_BUTTON:
      const {payload: {hide, value, inputArr}} = action
      if(hide) {
        return {...state, hide, value: ''}
      }
      return {...state, hide, value, inputArr: inputArr ? inputArr.concat(value).slice(-1) : null}
    default:
      return state
  }
}
