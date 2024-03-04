import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm.component";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "Bananas", quantity: 8 },
    { id: 2, product: "Eggs", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: 9 }];
    });

  };

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
    </div>
  );
}
