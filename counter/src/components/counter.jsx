import React, { Component } from "react";
class Counter extends Component {
  /** PROPS => anything we send to the object is in props
   * We can also send other React elements between tags and access them with this.props.children
   */
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  // arrow functions help us to bind this automatiically

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>There are no tags!</p>
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   )
  // }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "bg-warning text-dark " : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
