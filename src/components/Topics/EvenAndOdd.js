import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    sortArr(param) {
        let odd = []
        let even = []
        let numArr = param.split(',')
        console.log(numArr)
        numArr.forEach(index => {
            if(index % 2 === 0){
                even.push(parseInt(index))
            }else{
                odd.push(parseInt(index))
            }
        })
        
        this.setState({
            evenArray: even,
            oddArray: odd
        })

    }


  render() {
    return (
      <div>
          <div className="puzzleBox evenAndOddPB">
              <h4>Evens and Odds</h4>
              <input type="text" className='inputLine' onChange={(e) => {this.setState({
                  userInput: e.target.value
              })}}/>
              <button className="confirmationButton" onClick={() => this.sortArr(this.state.userInput)}>Submit</button>
              <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
              <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
          </div>
      </div>
    )
  }
}
