// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generatNoFun = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="cardContainer">
          <h1 className="headingEl">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btnEl" type="button" onClick={this.generatNoFun}>
            Generate
          </button>
          <p className="para2">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
