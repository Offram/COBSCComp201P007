import React, { Component } from "react";

class Bear extends Component {
    state = {
        // bearName: this.props.bear.name,
        bearId: this.props.bear.bearId,
        // movies: this.props.bear.movies,
        likeCount: this.props.bear.likeCount
    };
    render() {
        return (
            <div>
                {/* style="color: red; font-size:10" */}
                {/* <h1 style={{ color: "red", fontSize: "10" }}>Bear Web App = {this.state.bearName}</h1>
                <button className="btn btn-primary">Click Here {this.state.bearId} </button>
                <h3>{this.isBear()}</h3> */}

                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.bear.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.bear.name}</h5>
                        <p className="card-text">Bear Movies </p>
                        <ul className="card-text">
                            {
                                this.props.bear.movies.map((element) => {
                                    return (<li key={element}>{element}</li>);
                                })
                            }
                        </ul>
                        <button className="btn btn-primary" onClick={this.props.onLike}>
                            Like <span className="badge bg-light text-dark">{this.state.likeCount}</span>
                        </button>{" "}
                        <button type="button" className="btn btn-danger" onClick={this.props.onDelete}>
                            Delete
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