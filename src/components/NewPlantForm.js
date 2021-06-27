import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [plantForm, setPlantForm] = useState({
    name: "", 
    image: "", 
    price: 0
  })

  function handleChange(e) {
    setPlantForm({      
      ...plantForm, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify({
        name: plantForm.name, 
        image: plantForm.image, 
        price: plantForm.price
      })
    }
    fetch('http://localhost:6001/plants', configObj)
      .then(res => res.json())
      .then(newPlant => addNewPlant(newPlant))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
