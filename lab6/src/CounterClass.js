// // CounterClass.js
// import React, { Component } from "react";

// class CounterClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     // Simulate fetching initial count
//     const initialValue = 5;
//     this.setState({ count: initialValue });
//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>➕ Increment</button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>➖ Decrement</button>
//         <button onClick={() => this.setState({ count: this.state.count * 2 })}>✖️ Double</button>
//         <button onClick={() => this.setState({ count: 0 })}>🔁 Reset</button>
//       </div>
//     );
//   }
// }

// export default CounterClass;