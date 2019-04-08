import React, { Component } from 'react';
import VoteRow from './VoteRow.js'
import Form from './Form.js'

class VoteList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      congress: [],
      isLoading: false
    }
  }
  toggleLoading() {
    setTimeout(() => {
      this.setState(prevState => ({
        isLoading: false
      }))
    }, 750)
  }

  getData = async (e) => {
    e.preventDefault()
    if(!this.state.isLoading) {
      this.toggleLoading()
    }
    const votes = e.target.elements.votes.value
    const apiCall = await fetch (`https://api.propublica.org/congress/v1/${votes}/nominations.json`,
      {"headers": {"X-Api-Key": "ZMkGHy7VOl30HL8w4WaFmQzYvKs6Q0mdW93691Kg"}}
    )
    const data = await apiCall.json()
    const congress = data.results[0].votes
    this.setState({ congress: congress })
  }

  render () {
    if(this.state.isLoading){
      return (
        <h3>Hold on, I am loading...</h3>
      )
    }
    return (
      <div className= "content">
        <Form getVotes = {this.getData}/>
        <VoteRow congress = {this.state.congress}/>
      </div>
    )
  }
}

export default VoteList
