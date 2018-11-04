import React, { Component } from 'react';
import Available from './availableItemsTemplate';
import { FetchAvailableItems } from '../store/actions/createOrderAction';
import { connect } from 'react-redux';

export class ItemsAvailable extends Component {

    componentDidMount(){
        this.props.FetchAvailableItems();
    }

    render() {
        const { items }= this.props;
        return (
            <div className="container center">
                <h4>Here is what we have for you</h4>
                <table className="striped centered">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.map((item, id ) => {
                                return (
                                    <Available item={ item } key={ id } />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchAvailableItems: () => dispatch(FetchAvailableItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsAvailable);