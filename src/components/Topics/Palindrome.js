import React, { Component } from 'react'

export default class Palindrome extends Component {

  constructor() {
    super()
    this.state={
      userInput: '',
      palindrome: ''
    }
  }

  checkPalindrome(prop) {
    const stringArray = prop.split('')
    const reverseString = stringArray.reverse().join('')

    if(prop === reverseString){
      this.setState({
        palindrome: 'True'
      })
  }else{
    this.setState({
      palindrome: 'False'
    })
  }

}

  render() {
    return (
      <div className="puzzleBox palindromePB">
              <h4>Palindrome</h4>
              <input type="text" className='inputLine' onChange={(e) => {
                this.setState({
                  userInput: e.target.value
                })
              }}/>
              <button className="confirmationButton" onClick={() => {
                this.checkPalindrome(this.state.userInput)
              }}>Submit</button>
              <span className="resultsBox">Palindrome? {this.state.palindrome}</span>
          </div>
    )
  }
}
