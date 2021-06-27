import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [ plantData, setPlantData ] = useState({
    name: "", 
    image: "", 
    price: ""
  })

  function handleChange(e) {
    setPlantData({
      ...plantData, 
      [e.target.name]: e.target.value,
    })
  }

  const newPlantObj = {
    method: "POST", 
    headers: {
      "content-type": "application/json"
    }, 
    body: JSON.stringify({
      name: plantData.name, 
      image: plantData.image, 
      price: parseInt(plantData.price)
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', newPlantObj)
      .then(res => res.json())
      .then(newPlant => addPlant(newPlant))
      //add data to plantList... function called add plant
      setPlantData({
        name: "", 
        image: "", 
        price: ""
      })
      //make default variable 
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={plantData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={plantData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={plantData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
