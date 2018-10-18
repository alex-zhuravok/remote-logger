import React from 'react';

function LogItem(props) {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.moment}</td>
            <td>{props.item.type}</td>
            <td>{props.item.message}</td>
            <td></td>
        </tr>
    )
}

export default LogItem;