import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions'
import Main from './Main'

class Total extends Component {

  componentDidMount () {
    const {main: {urls}, fetchData} = this.props
    fetchData(urls[0], urls[1]) //urls array is coming from initialState
  }

  render () {
    const {main: {actressData, pictureData}, paginate: {subActressData, pageNum, size, subPictureData}} = this.props
    if (!actressData || !pictureData) { // wait for data to come back then render component
      return <h1 className="loading">Loading...</h1>
    }
    return <Main data={pageNum === 1 ? actressData : subActressData}
                 pictures={pageNum === 1 ? pictureData.slice(0, size) : subPictureData}/>
  }
}

const mapStateToProps = ({main, paginate}) => ({main, paginate})

const mapDispatchToProps = dispatch => (bindActionCreators({fetchData}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Total)


