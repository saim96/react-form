import { useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "Bananas", quantity: 8 },
    { id: 2, product: "Eggs", quantity: 12 },
  ]);


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
      <p>
      ________________________________________________________ + ___________________________________________________
    </p>
    </div>
  );
}
