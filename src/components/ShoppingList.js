import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItem(event.target.value);
  }

  const dropdownItemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // const searchedItemsToDisplay = items.filter((item) => {
  //   if (!searchedItem.trim()) {
  //     return item
  //   }
  // });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter searchedItem={searchedItem} onCategoryChange={handleCategoryChange} onSearchedChange={handleSearchChange} />
      <ul className="Items">
        {dropdownItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
