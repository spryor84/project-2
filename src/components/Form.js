import React from 'react';

const Form = (props) => {
    return (
      <form className="zipcode-form" onSubmit={ props.getVotes }>
        <br />
        <input type='text' name='votes' placeholder='Enter Congress Number'/>
        <br />
        <button> SUBMIT</button>
      </form>
     )
}

export default Form
