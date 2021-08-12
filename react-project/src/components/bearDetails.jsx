import React, { Component } from "react";

class BearDetails extends Component {
    render() {
        return (
            <div><h1> Bear Details Id = {this.props.match.params.id}</h1><button onClick={this.goHome}>Go Home</button></div>
        );
    }

    goHome = () => {
        this.props.history.push("/");
    }
}

export default BearDetails;