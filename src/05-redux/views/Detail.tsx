import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import store from '../redux/store'

interface IParam {
  id: string
}

export default class Detail extends Component<RouteComponentProps<IParam>, any> {
  componentDidMount() {
    // console.log((this.props.match.params as any).id)
    console.log(this.props.match.params.id)

    store.dispatch({
      type: 'hide'
    })
  }

  componentWillUnmount() {
    store.dispatch({
      type: 'show'
    })
  }

  render() {
    return (
      <div>Detail</div>
    )
  }
}
