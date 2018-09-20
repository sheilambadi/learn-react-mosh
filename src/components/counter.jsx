import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="No Image" /> */}
        {/* <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Click me</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {this.state.tags.length === 0 && "No tags to display"}

        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Nothing to display</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
