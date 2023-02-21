// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <button className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default Counter
