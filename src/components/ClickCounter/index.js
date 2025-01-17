// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="counter">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button onClick={this.onIncrement} className="btn btn-primary">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
