import React, {Component} from 'react'
import Table from './Table'
import PagBar from './PagBar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {openPopUp} from '../actions'
import PopUp from '../components/PopUp'

class Main extends Component {

    openPopUp = index => { // show controller depending on row item clicked
        const {openPopUp, paginate: {pageNum}} = this.props
        openPopUp(true, index, pageNum)
    }

    closePopUp = () => {
        this.props.openPopUp(false, null, -1) // pageNum = -1 so openPopUpReducer will set state.open.show = false
    }  // null is passed as the second argument since index doesn't have to be set when popup is closed

    render() {
        const {data, pictures, paginate: {size}, open: {show, index}} = this.props
        if (show) {
            const {Year, Actress, Movie} = data[index]  //pull off properties of any index that is clicked
            return (
                <PopUp year={Year}
                       actress={Actress}
                       movie={Movie}
                       pictures={pictures}
                       index={index}
                       close={() => this.closePopUp()}/>
            )
        }
        return (
            <div>
                <Table data={data.slice(0, size)}
                       openPopUp={this.openPopUp}/>
                <PagBar/>
            </div>
        )
    }
}

const mapStateToProps = ({paginate, open}) => ({paginate, open})
const mapDispatchToProps = dispatch => (bindActionCreators({openPopUp}, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Main)