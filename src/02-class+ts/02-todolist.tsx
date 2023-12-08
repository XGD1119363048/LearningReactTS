import React, { Component } from 'react'

interface IState {
  text: string,
  list: string[]
}

export default class App extends Component<any, IState> {
  state = {
    text: '',
    list: []
  }
  myref = React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        {/* <input type='text' value={this.state.text} onChange={(evt) => {
          this.setState({
            text: evt.target.value
          })
        }} /> */}
        <input type='text' ref={this.myref} />
        <button onClick={() => {
          // console.log(this.state.text)
          console.log((this.myref.current as HTMLInputElement).value)
          
          this.setState({
            list: [...this.state.list, (this.myref.current as HTMLInputElement).value]
          })
        }}>click</button>

        {
          this.state.list.map(item => <li key={item}>
            {item}
          </li>)
        }
      </div>
    )
  }
}
