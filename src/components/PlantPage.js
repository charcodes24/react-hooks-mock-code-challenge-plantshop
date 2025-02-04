import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, []);

  function addNewPlant(newPlant) {
    setPlants((mostUpdatedPlants) => [...mostUpdatedPlants, newPlant])
  }

  function deletePlant(id) {
    let updatedPlantsArray = plants.filter((plant) => plant.id !== id)
    setPlants(updatedPlantsArray)
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().startsWith(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm 
        addNewPlant={addNewPlant}
      />
      <Search 
        handleSearchChange={handleSearchChange }
      />
      <PlantList
        filteredPlants={filteredPlants}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
