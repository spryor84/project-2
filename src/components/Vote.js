import React, { Component } from 'react';
// import TheMightyDucks from './TheMightyDucks.js'

class Vote extends Component {
  render () {
    let full = this.props.congress
    let congress = this.props.congress.congress ? this.props.congress.congress : ''
    let meeting = this.props.congress.congress ? this.props.congress.session : ''
    let number = this.props.congress.congress ? this.props.congress.roll_call : ''
    let desc = this.props.congress.congress ? this.props.congress.description : ''
    let date = this.props.congress.congress ? this.props.congress.date : ''
    let dem = this.props.congress.congress ? this.props.congress.democratic.yes : ''
    let rep = this.props.congress.congress ? this.props.congress.republican.yes : ''
    let ind = this.props.congress.congress ? this.props.congress.independent.yes : ''
    let total = this.props.congress.congress ? this.props.congress.total.yes : ''
    return (
      <div className='data'>
        <div className="vote-summary">
          <h3>Vote List</h3>
          <p>Congress: {congress}</p>
          <p>Meeting: {meeting}</p>
          <p>Vote#: {number}</p>
          <p>Description: {desc}</p>
          <p>Date: {date}</p>
          <p>Democrats: {dem}  Republicans: {rep}  Independents: {ind}</p>
          <h4>Total: {total}</h4>
        </div>
        <br/>
      </div>
    )
  }
}

export default Vote
