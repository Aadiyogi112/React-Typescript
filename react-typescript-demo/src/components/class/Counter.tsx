import { Component } from "react";

type CounterProps={
    message:string
}

type CounterState={
    count:number 
}

export class Counter extends Component<CounterProps,CounterState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState)=>({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h1>{this.props.message}Counter: {this.state.count}</h1>
      </div>
    );
  }
}
