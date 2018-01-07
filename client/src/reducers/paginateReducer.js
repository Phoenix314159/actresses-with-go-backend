import types from '../actions/types'
import getSubData from '../utilities/getSubData'

export default (state = {}, action) => {
  const {type} = action
  switch (type) {
    case types.PAGINATE: { //when paginate buttons are clicked
      const {payload: {pageNum, actressData, size, pictureData}} = action
      const subPictureData = getSubData(pictureData, pageNum, size)
      const subActressData = getSubData(actressData, pageNum, size)
      return {...state, subActressData, pageNum, size, subPictureData}
    }
    case types.PAGE_SIZE: {
      let {payload: {subData, size}} = action // when setPageSize is fired, pageNum goes back to page one
      subData = getSubData(subData, 1, size)
      return {...state, subData, size, pageNum: 1}
    }
    default:
      return state
  }
}
