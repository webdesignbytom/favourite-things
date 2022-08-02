import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import VoteRig from './components/VoteRig';


function AddItems(props) {

  const { items, setItems } = props

  const [itemName, setItemName] = useState('')
  const [itemCost, setItemCost] = useState('')
  const [itemImageURL, setItemImageURL] = useState('')
  const [itemScoreArray, setItemScoreArray] = useState([])
  const [itemScore, setItemScore] = useState(1)
  

  const handleChange = (event) => {
    const inputValue = event.target.value
    const inputName = event.target.name 
    if (inputName === 'itemName') {
      setItemName(inputValue)
    } else if (inputName === 'itemCost') {
      setItemCost(inputValue)
    } else if (inputName === 'itemImageURL') {
      setItemImageURL(inputValue) 
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const itemData = {
      itemName: itemName,
      itemCost: itemCost,
      itemImageURL: itemImageURL,
      itemScore: itemScore
    }

    fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData)
    })
    .then((response) => {
      console.log('response', response)
      return response.json()
    })
    .then((data) => {
       console.log('post data', data)
       setItems([...items, data])
       navigate(`/`)
    })
    .catch((error) => {
      console.log(error)
    });
    setItems(itemData)

    setItemName('')
    setItemCost('')
    setItemImageURL('')
  }
  let navigate = useNavigate()
  return (
    <>
    <main>
      <form className='item-submit-form' onSubmit={handleSubmit}>
        <h2>Add An Item</h2>

        <label htmlFor="itemName">Item Name</label>
        <input 
          id="itemName" 
          name="itemName" 
          type="text"
          onChange={handleChange}
          value={itemName}
            required 
          />
        
        <label htmlFor='itemCost'>Item Cost</label>
        <input 
          id='itemCost'
          name='itemCost'
          type="number"
          onChange={handleChange}
          value={itemCost}
            required
        />

        <label htmlFor='itemImageURL'>Image URL</label>
        <input 
          id='itemImageURL'
          name='itemImageURL'
          type='text'
          onChange={handleChange}
          value={itemImageURL}
            required
        />

        <div className="actions-section">
          <button 
            className="button blue" 
            type="submit"
            >
          Add Item
          </button>
        </div>

      </form>
    </main>

    </>
  )
}

export default AddItems