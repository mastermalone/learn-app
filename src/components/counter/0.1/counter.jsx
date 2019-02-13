import React, { Component } from "react";
import CounterService from "./counter-service/0.1/counterService";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  //You can use this and add a style={this.styles} to any element
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  counterService = new CounterService(this);

  render() {
    return (
      <div>
        <span className={this.counterService.getBadgeClasses()}>
          {this.counterService.formatCount()}
        </span>
        <button
          onClick={() => this.counterService.increment({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.counterService.showCreateNewTagMessage()}
        {this.counterService.renderTags()}
      </div>
    );
  }
}

export default Counter;
