import React, { Component } from 'react'

class ClassUseEffect extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      name : null
    }
  }

  componentDidMount () {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate (prevProps,prevState) {
    if(prevState.count !== this.state.count){
      console.log('Updating document title')
      document.title = `Clicked ${this.state.count} times`
    }
  }

  incrementCount = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.name}
          onChange = {e => {
            this.setState({name:e.target.value})
          }}/>
        <button onClick={this.incrementCount}>{this.state.count}</button>
      </div>
    )
  }

}

export default ClassUseEffect