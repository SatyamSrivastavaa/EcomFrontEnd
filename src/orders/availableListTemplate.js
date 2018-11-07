import React, { Component } from 'react';

export class AvailableListForCreateOrder extends Component {

    changeSpan(){
        let value= document.getElementById(this.props.item.name).innerHTML;
        if(value === "0")
            document.getElementById(this.props.item.name).innerHTML= 1;
        else
            document.getElementById(this.props.item.name).innerHTML= 0;
    }

    render() {
        const { item }= this.props;
        return (
            <tr>
                <td>{ item.name }</td>
                <td>{ item.qty }</td>
                <td>
                    <input type="number" min="0" className= { item.name } />
                </td>
                <td>
                    <label>
                        <input type="checkbox" onClick={ this.changeSpan.bind(this) } />
                        <span id={ item.name }>0</span>
                    </label>                    
                </td>
            </tr>
        )

    }
}

export default AvailableListForCreateOrder;