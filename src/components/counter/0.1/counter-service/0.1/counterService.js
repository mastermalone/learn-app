import React, { Component } from "react";

class CounterService {
  constructor(el) {
    this.el = el;
  }

  _this() {
    return this;
  }

  formatCount() {
    const { count } = this.el.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let spanCountClass = "badge  m-2 badge-";
    return (spanCountClass +=
      this.el.state.count === 0 ? "warning" : "primary");
  }

  showCreateNewTagMessage() {
    return this.el.state.tags.length === 0 && <p>Please create a new tag!</p>;
  }
  renderTags() {
    if (this.el.state.tags.length === 0) {
      return <p>There are no tags</p>;
    } else {
      return (
        <ul>
          {this.el.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  //Using an arrow function, you can avoid the rebinding of 'this' to the event target
  increment = e => {
    console.log("This", e);
    //Never update the state object directly, use this syntax instead.
    this.el.setState({ count: this.el.state.count + 1 });
  };
}

export default CounterService;
