import React, { Component } from 'react'

export default class FilterString extends Component {
  constructor(){
    super()
    this.state = {
        unFilteredArray: ["James", "Jessica", "Melody",
         "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
        userInput: '',
        filteredArray: []
    }
  }

  filterNames(prop) {
    
    let array = this.state.unFilteredArray
    let newArray = array.filter(word => word.includes(prop))

    this.setState({
      filteredArray: newArray
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
              <h4>Filter String</h4>
              <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
              <input type="text" className='inputLine'onChange={
                (e) => {
                  this.setState({
                    userInput: e.target.value
                  })
                }
              }/>
              <button className="confirmationButton" onClick={() => {
                this.filterNames(this.state.userInput)
              }}>Submit</button>
              <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
          </div>
    )
  }
}
