import React, { Component } from "react"

export default class TodoRows extends Component {
  render = () => (
    <tr key={this.props.item.action}>
      <td>{this.props.item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={() => this.props.toggleDone(this.props.item)}
        ></input>
      </td>
    </tr>
  )
}
