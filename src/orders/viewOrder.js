import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from './orderTemplate';
import { FetchOrders } from '../store/actions/createOrderAction';

export class ViewOrder extends Component {

    componentDidMount(){
        this.props.fetchOrders();
    }

    render() {
        const { orders }= this.props;

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

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(FetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
