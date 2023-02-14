import React, { Component } from 'react'
import Teamview from './Teamview'

export default class Scoreboard extends Component {
  render() {
    return (
      <div>
        <h1> Book Cricket </h1>
        <Teamview initialRun={0} initialScore={0} outs={0} teamName="Team 1" status={false} message="Start Batting"/>
        <Teamview initialRun={0} initialScore={0} outs={0} teamName="Team 2" status={true} message=""/>
      </div>
    )
  }
}
