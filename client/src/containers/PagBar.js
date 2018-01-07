import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { changePage } from '../actions'
import Paginate from 'react-js-pagination'

class PagBar extends Component {

  handlePageChange = pageNum => {
    const {changePage, main: {actressData, pictureData}, paginate: {size}} = this.props //actressData and pictureData are coming from getDataReducer
    changePage(pageNum, actressData, size, pictureData) // dispatches action to change the page with data sending to the paginateReducer
  }

  render () {
    const {main: {totalItems}, paginate: {pageNum, size}} = this.props
    const pageRangeDisplayed = Math.round((totalItems / size))
    return (
      <div className="pagContainer">
        <div className="movePag">
          <Paginate activePage={pageNum}
                    itemsCountPerPage={size}
                    totalItemsCount={totalItems}
                    pageRangeDisplayed={pageRangeDisplayed}
                    onChange={this.handlePageChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({main, paginate}) => ({main, paginate})

const mapDispatchToProps = dispatch => (bindActionCreators({changePage}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(PagBar)