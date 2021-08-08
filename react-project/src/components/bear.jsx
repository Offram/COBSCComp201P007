import React, { Component } from "react";

class Bear extends Component {
    state = {
        bearName: this.props.bearName,
        bearId: this.props.bearId,
        movies: ["Movie 1", "Movie 2", "Movie 3", "Movie 4"],
        likeCount: this.props.likeCount
    };
    render() {
        return (
            <div>
                {/* style="color: red; font-size:10" */}
                {/* <h1 style={{ color: "red", fontSize: "10" }}>Bear Web App = {this.state.bearName}</h1>
                <button className="btn btn-primary">Click Here {this.state.bearId} </button>
                <h3>{this.isBear()}</h3> */}

                <div className="card" style={{ width: "18rem" }}>
                    <img src="logo512.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.bearName}</h5>
                        <p className="card-text">Bear Movies </p>
                        <ul className="card-text">
                            {
                                this.state.movies.map((element) => {
                                    return (<li key={element}>{element}</li>);
                                })
                            }
                        </ul>
                        <button className="btn btn-primary" onClick={() => this.likeBear(3)}>
                            Like <span className="badge bg-light text-dark">{this.state.likeCount}</span>
                        </button>
                    </div>
                </div>
            </div >
        );
    }

    likeBear = (addCounter) => {
        console.log("You have liked the Bear......");
        this.setState({ likeCount: this.state.likeCount + addCounter })
    }

    isBear() {
        return this.state.bearId < 0 ? "Not a bear" : "Yes it is a bear";
    }
}

export default Bear;