import React from 'react';

const Available = ({ item }) => {
    return (
        <tr>
            <td>{ item.name }</td>
            <td>{ item.qty }</td>
        </tr>
    )
}

export default Available;