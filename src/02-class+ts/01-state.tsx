import React, { Component } from 'react'

interface IState {
  name: string
}

// 泛型，第一个约束属性，第二个约束状态
export default class App extends Component<any, IState> {
  state = {
    name: 'xgd'
  }
  render() {
    return (
      <div>
        App-{this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
        <button onClick={() => {
          // this.state.name = 100
          this.setState({
            name: 'xiaoming'
          })
        }}>click</button>
      </div>
    )
  }
}
