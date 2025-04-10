import React, { Component } from 'react'
import spinner from './Ajax-loader.gif'

export default class loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinner} alt="sorry" srcSet="" />
      </div>
    )
  }
}
