import React, { Component } from "react";

class Bear extends Component {
    state = {
        bearName: "Kung Fu Panda",
        bearId: 345
    };
    render() {
        return (
            <div>
                <h1>Bear Web App = {this.state.bearName}</h1>
                <button>Click Here {this.state.bearId} </button>
                <h3>{this.isBear()}</h3>
            </div>
        );
    }

    isBear() {
        return this.state.bearId < 0 ? "Not a bear" : "Yes it is a bear";
    }
}

export default Bear;