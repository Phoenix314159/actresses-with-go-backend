import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hideButtonFunc, pageSize } from '../actions'
import Thead from '../components/Thead'
import Tbody from '../components/Tbody'
import PageSize from '../components/PageSize'

class Table extends Component {

  handleInputChange = e => {
    const {target: {value}} = e
    const {hideButtonFunc, hideButton: {inputArr}} = this.props
    hideButtonFunc(false, value, inputArr) //value is sent to hideButtonReducer to update value in input box
  }

  setPageSize = () => {
    const {data, pageSize, hideButtonFunc, hideButton: {inputArr}} = this.props
    pageSize(data, inputArr[0]) //all elements are removed from inputArr except the last one in the hideButtonReducer
    hideButtonFunc(true)
  }

  render () {
    const {data, openPopUp, hideButton: {hide, value}} = this.props
    const buttonStyle = hide ? 'pageButtonDisplay' : 'btn btn-success'
    return (
      <div>
        <div className="total">
          <div className="moveTable">
            <table className="table actressTable">
              <Thead/>
              <Tbody data={data}
                     openPopUp={openPopUp}/>
            </table>
          </div>
        </div>
        <PageSize value={value}
                  handleInputChange={this.handleInputChange}
                  buttonStyle={buttonStyle}
                  setPageSize={this.setPageSize}/>
      </div>
    )
  }
}

const mapStateToProps = ({hideButton}) => ({hideButton})

const mapDispatchToProps = dispatch => (bindActionCreators({hideButtonFunc, pageSize}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Table)

