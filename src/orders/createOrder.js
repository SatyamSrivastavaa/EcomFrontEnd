import React, { Component } from 'react';
import AvailableList from './availableListTemplate';
import { FetchAvailableItems, CreateOrder } from '../store/actions/createOrderAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class CreateOrderComponent extends Component {
    
    state={
        items: []
    }

    componentDidMount(){
        this.props.FetchAvailableItems(this.props.auth.id);
    }

    executeOrder(){
        console.log("order created");

        console.log(this);

        this.props.items.forEach(item => {
            console.log(item.name);

            if(document.getElementsByClassName(item.name)[0].value <= item.qty){
                document.getElementsByClassName("outOfStock")[0].style.display= "none";
                if(document.getElementById(item.name).innerHTML === "1"){
                    let itemForNewOrder={
                        name: item.name,
                        qty: document.getElementsByClassName(item.name)[0].value
                    }
    
                    this.state.items.push(itemForNewOrder);
                }
            }
            else {
                alert("Some orders you are trying to order is more than the availability!");
                document.getElementsByClassName("outOfStock")[0].style.display= "none";
            }

            
            
        });

        console.log(this.state.items);
        this.props.CreateOrder(this.state, this.props.auth.id);
        this.props.history.push("/viewOrder");
        console.log(this.state.items);
    }

    render() {
        const { items }= this.props;
        const { auth }= this.props;

        if (!auth.id) return <Redirect to='/signin' />
        else{
            return (
                <div className="container">
                    <table className="striped centered tables">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Available</th>
                                <th>You Want</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items && items.map((item, id ) => {
                                    return (
                                        <AvailableList item={ item } key={ id } />
                                    )
                                })
                            }
                        </tbody>    
                    </table>
                    <div className="red-text center outOfStock">
                        Some orders you are trying to order is more than the availability! 
                    </div>
                    <button className="btn-small right" type="button" name="action" onClick= { this.executeOrder.bind(this) }>Submit
                        <i className="material-icons right">send</i>
                    </button>
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
        FetchAvailableItems: (id) => dispatch(FetchAvailableItems(id)),
        CreateOrder: (order, id) => dispatch(CreateOrder(order,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderComponent);

