import React from 'react';

const OrderList = ({ order }) => {
    return (
        <tbody>
            {
                order.items && order.items.map((item, id ) => {
                    return (
                        <tr key={ id }>
                            <td>{ item.name }</td>
                            <td>{ item.qty }</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default OrderList;