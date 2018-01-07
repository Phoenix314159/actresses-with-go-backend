import types from '../actions/types'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.FETCH_DATA: { //initial page load
      const {payload: {actressData, pictureData}} = action
      const totalItems = actressData.length
      return {...state, actressData, pictureData, totalItems}
    }
    default:
      return state
  }
}

