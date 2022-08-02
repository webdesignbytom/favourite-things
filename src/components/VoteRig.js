import React from "react";
import { useState, useEffect } from 'react'

function VoteRig(props) {
  const { itemScoreArray, setItemScoreArray } = props
  // function to handle the votes
  const [voteScore, setVoteScore] = useState(null)

  const handleChange = (event) => {
    const inputID = event.target.id
    if (inputID === 'scores1') {
      setVoteScore(1)
    } else if (inputID === 'scores2') {
      setVoteScore(2)
    } else if (inputID === 'scores3') {
      setVoteScore(3)
    }else if (inputID === 'scores4') {
      setVoteScore(4)
    }else if (inputID === 'scores5') {
      setVoteScore(5)
    }else if (inputID === 'scores6') {
      setVoteScore(6)
    }else if (inputID === 'scores7') {
      setVoteScore(7)
    }else if (inputID === 'scores8') {
      setVoteScore(8)
    }else if (inputID === 'scores9') {
      setVoteScore(9)
    }else if (inputID === 'scores10') {
      setVoteScore(10)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:4000/items/:id/1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voteScore)
    })
    .then((response) => {
      console.log('response', response)
      return response.json()
    })
    .then((data) => {
       console.log('post data', data)
       setItemScoreArray([...itemScoreArray, data])
    })
    .catch((error) => {
      console.log(error)
    });
    // setItemScoreArray(voteScore)
  };

  return (
    <>
      <form className="voting-form" onSubmit={handleSubmit}>
        <h2>Vote for your Favorites</h2>
        <label htmlFor="voting">Vote</label>

        <label htmlFor="scores1">1</label>
        <input
          id="scores1"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores2">2</label>
        <input
          id="scores2"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores3">3</label>
        <input
          id="scores3"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores4">4</label>
        <input
          id="scores4"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores5">5</label>
        <input
          id="scores5"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores6">6</label>
        <input
          id="scores6"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores7">7</label>

        <input
          id="scores7"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores8">8</label>

        <input
          id="scores8"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores9">9</label>

        <input
          id="scores9"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <label htmlFor="scores10">10</label>

        <input
          id="scores10"
          name="voteCard"
          type="radio"
          onChange={handleChange}
          required
        />
        <div className="actions-section">
          <button className="button blue" type="submit">
            Vote Now
          </button>
        </div>
      </form>
    </>
  );
}

export default VoteRig;
