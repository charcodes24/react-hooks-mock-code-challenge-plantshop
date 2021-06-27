import React, { useState } from "react";

function PlantCard({ plant, deletePlant }) {
  const { id, name, image, price } = plant
  const [inStock, setStock] = useState(true)
  const [hide, setHide] = useState(true)

  function toggleInStock() {
    setStock(!inStock)
  }

  function handleDelete() {
    console.log(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    deletePlant(id)
  }

  function togglePrice() {
    setHide(!hide)
    return (
      <div>
        <form>
          <input type="text" placeholder="update price.."/>
        </form>
      </div>
    )
  }

  function handleUpdate() {
    console.log(price)
  }

  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p onClick={togglePrice} style={hide ? {'display': 'block'} : {'display': 'none'}} >Price: ${price}</p>
      <form style={hide ? {'display': 'none'} : {'display': 'block'}}>
        <select>
          <option>Update Price</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </form>
      {inStock ? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
      <br/>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
