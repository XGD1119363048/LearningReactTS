import React, { Component } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'

interface IItem {
  filmId: number,
  name: string
}

// interface IProps {
//   history: any
// }

export default class Films extends Component<RouteComponentProps, any> {
  state = {
    list: []
  }
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9459097',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1700309676199269302665217","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item: IItem) => <li key={item.filmId} onClick={() => {
              console.log(this.props.history)
              this.props.history.push(`/detail/${item.filmId}`)
            }}>
              {item.name}
            </li>)
          }
        </ul>
      </div>
    )
  }
}
