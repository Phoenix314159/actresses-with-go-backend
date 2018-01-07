import types from './types'
import axios from 'axios'

export const fetchData = (url1, url2) => async dispatch => {
  try {
    const method = 'get',
      headers = {'Content-Type': 'application/json'},
      getUrl1 = axios({method, url: url1, headers}),
      getUrl2 = axios({method, url: url2, headers}),
      resArr = await axios.all([getUrl1, getUrl2]),
      actressData = resArr[0].data,
      pictureData = resArr[1].data
    return dispatch({
      type: types.FETCH_DATA,
      payload: {actressData, pictureData}
    })
  }
  catch (err) {
    console.log(err)
  }
}

export const changePage = (pageNum, actressData, size, pictureData) => (
  {
    type: types.PAGINATE,
    payload: {pageNum, actressData, size, pictureData}
  }
)

export const openPopUp = (show, index, pageNum) => (
  {
    type: types.OPEN_POPUP,
    payload: {show, index, pageNum}
  }
)

export const pageSize = (subData, size) => (
  {
    type: types.PAGE_SIZE,
    payload: {subData, size}
  }
)

export const hideButtonFunc = (hide, value, inputArr) => (
  {
    type: types.HIDE_BUTTON,
    payload: {hide, value, inputArr}
  }
)

















