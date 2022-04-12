import React, { Component } from 'react'

export default class Sum extends Component {

  constructor() {
    super()
    this.state={
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  findSum() {
    this.setState({
      sum: +this.state.number1 + +this.state.number2
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
              <h4>Sum</h4>
              <input type="number" className='inputLine' onChange={(e) => {
                console.log(e.target.value)
                this.setState({
                  number1: e.target.value
                })
              }}/>
              <input type="number" className='inputLine' onChange={(e) => {
                console.log(e.target.value)
                this.setState({
                  number2: e.target.value
                })
              }}/>
              <button className="confirmationButton" onClick={() => {
                this.findSum()
              }}>Submit</button>
              <span className="resultsBox">Sum: {this.state.sum}</span>
          </div>
    )
  }
}
