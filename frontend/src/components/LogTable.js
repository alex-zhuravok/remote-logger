import React, { Component } from 'react';

class LogTable extends Component {
    state = {
        logs: []
    }

    componentDidMount() {
        fetch("/api/logs")
        .then(res => res.json())
        .then(logs => this.setState({logs}))
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Id</th>
                    <th>Date and time</th>
                    <th>Event type</th>
                    <th>Message</th>
                    <th>Additional data</th>
                </tr>
                {
                    this.state.logs.map(logItem =>
                        <tr key={logItem._id}>
                            <td>{logItem.id}</td>
                            <td>{logItem.moment}</td>
                            <td>{logItem.type}</td>
                            <td>{logItem.message}</td>
                            <td></td>
                        </tr>
                )}
            </table>
        );
    }
}

export default LogTable;