import { useState } from "react";
import {v4 as uuid} from "uuid";
import ShoppingListForm from "./ShoppingListForm.component";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 8 },
    { id: uuid(), product: "Eggs", quantity: 12 },
  ]);
  // I defined a function in here called addItem.
  // pass it down to my ShoppingListForm.
  // And when we submit the form in child component.
  // we can execute addItem and pass through product and quantity and all of that information.

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };
//   gonna call this current items.
//   use the callback syntax and return a copy of the original items
//   and then add in this guy at the end. So copy all the items that we already have,
//   and then make a new object that has the item information passed into us, this function and also has an ID of nine.
  return (

    <div>
    
      <h2> 5- Shopping List </h2>
      <ul>
      
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
      {/* whenever this will be rendered this will call addItem from Child component */}
    </div>
  );
}
