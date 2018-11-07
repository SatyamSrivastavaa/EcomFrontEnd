import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from './orderTemplate';
import { FetchOrders } from '../store/actions/createOrderAction';
import { Redirect } from 'react-router-dom';

export class ViewOrder extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.fetchOrders(this.props.auth.id);
    }

    render() {
        const { orders }= this.props;
        const { auth }= this.props;

        if (!auth.id) return <Redirect to='/signin' />
        else{
            return (
                <div className="container center">
                    <h4>Your Orders</h4>
                    <table className="striped centered">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        {
                            orders && orders.map((order, id ) => {
                                return (
                                    <OrderList order={ order } key={ id } />
                                )
                            })
                        }
                    </table>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log("inside map: ", state);
    return {
        orders: state.orders,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (id) => dispatch(FetchOrders(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
