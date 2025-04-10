import React, { Component } from 'react'
import spinner from './Ajax-loader.gif'

function loading() {
  return (
    <div className="text-center">
      <img src={spinner} alt="sorry" srcSet="" />
    </div>
  )

}


export default loading
