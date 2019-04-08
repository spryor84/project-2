import React from 'react';
import Vote from './Vote.js'

function VoteRow(props) {

  let allVotes = props.congress.map ( (congress, index) => (
    <Vote
      congress={congress}
      key = {index}
    />
  ))

  return (
    <div className='data'>
      <h2>Results:</h2>
      {allVotes}
    </div>
  )

}

export default VoteRow

// MAKE FUNCTIONAL COMPONENT!
