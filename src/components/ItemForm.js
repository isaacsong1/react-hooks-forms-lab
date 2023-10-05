import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")
  
  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleCategoryChange = e => { 
    setCategory(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onItemFormSubmit({
      name,
      category,
      id: uuid(),
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
