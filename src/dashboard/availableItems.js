import React, { Component } from 'react';
import Available from './availableItemsTemplate';
import { FetchAvailableItems } from '../store/actions/createOrderAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class ItemsAvailable extends Component {

    componentDidMount(){
        this.props.FetchAvailableItems(this.props.auth.id);
    }

    render() {
        const { items }= this.props;
        const { auth }= this.props;

        if (!auth.id) return <Redirect to='/signin' />
        else{
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
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchAvailableItems: (id) => dispatch(FetchAvailableItems(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsAvailable);