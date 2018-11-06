import React, { Component } from 'react';
import AvailableList from './availableListTemplate';
import { FetchAvailableItems } from '../store/actions/createOrderAction';
import { connect } from 'react-redux';

export class CreateOrder extends Component {
    
    state={
        items: []
    }

    componentDidMount(){
        this.props.FetchAvailableItems();
    }

    executeOrder(){
        console.log("order created");

        console.log(this);

        this.props.items.forEach(item => {
            console.log(item.name);

            if(document.getElementsByClassName(item.name)[0].value <= item.quantity){
                document.getElementsByClassName("outOfStock")[0].style.display= "none";
                if(document.getElementById(item.name).innerHTML === "1"){
                    let itemForNewOrder={
                        name: item.name,
                        quantity: document.getElementsByClassName(item.name)[0].value
                    }
    
                    this.state.items.push(itemForNewOrder);
                }
            }
            else {
                document.getElementsByClassName("outOfStock")[0].style.display= "block";
            }
            
        });

        console.log(this.state.items);
        // this.state.items.splice(0);
        // console.log(this.state.items);
    }

    render() {
        const { items }= this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);

