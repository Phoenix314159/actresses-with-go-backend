import types from '../actions/types'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.OPEN_POPUP:  //on popUp close, state.open.pageNum = -1
      const {payload: {show, index, pageNum}} = action
      return pageNum === -1 ? {...state, show: false} : {...state, show, index}
    default:
      return state
  }
}
