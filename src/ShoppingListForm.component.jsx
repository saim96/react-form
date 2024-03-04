import { useState } from "react";

export default function ShoppingListForm() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
  });
  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  return (
    <form>
      <h3>4- Shopping List Form </h3>
      <h3>Product is: {formData.product} </h3>
      <label htmlFor="product"> Product Name</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <h3>Qty is: {formData.quantity} </h3>
      <label htmlFor="quantity"> Quantity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button> Add Item</button>
      <p>
        ________________________________________________________________________________________________
      </p>
    </form>
  );
}
