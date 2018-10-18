import React, { Component } from 'react';

class LogTable extends Component {
    state = {
        logs: []
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date and time</th>
                            <th>Event type</th>
                            <th>Message</th>
                            <th>Additional data</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.addNewHandler}>Add new</button>
                </div>
            </div>
        );
    }

    addNewHandler = (e) => {
        let newLogItem = {id: "17f3be1e-3ac5-4d2e-a970-f51c876f5d48", moment: new Date().toLocaleString(), type: "error", message: "something went wrong", content: {}};

        fetch("/api/logs", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(newLogItem)
        }).then((data) => {
            this.loadData();
        });
    }

    loadData() {
        fetch("/api/logs")
        .then(res => res.json())
        .then(logs => this.setState({logs}))
    }
}

export default LogTable;