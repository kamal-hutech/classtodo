import React, { Component } from "react"

export default class Navbar extends Component {
  render() {
    return (
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {this.props.name} To Do List
        </h2>
      </div>
    )
  }
}
