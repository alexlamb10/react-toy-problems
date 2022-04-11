import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray:  [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
             { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
              { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
    }

    filterObject(props) {
        let array = this.state.unFilteredArray
        let filteredNames = []
        for(let i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(props)){
                filteredNames.push(array[i])
            }
        }
        this.setState({
            filteredArray: [filteredNames]
        })
    }

  render() {
    return (
      <div>
          <div className="puzzleBox filterObjectPB">
              <h4>Filter Object</h4>
              <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
              <input type="text" className='inputLine' onChange={(e) => {
                  this.setState({
                      userInput: e.target.value
                  })
              }}/>
              <button className="confirmationButton" onClick={() => {this.filterObject(this.state.userInput)}}>Submit</button>
              <span className="resultsBox filterObjectRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
          </div>
      </div>
    )
  }
}
