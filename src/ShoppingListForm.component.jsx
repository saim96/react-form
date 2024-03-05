import { useState } from "react";

export default function ShoppingListForm({ addItem }) { // shoppinglistform is expecting addItem function. we need to call this function when the form is submitted
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
  const handleSubmit = (e) => { //Event handler functions expect an event object as a parameter.
    e.preventDefault();
    addItem(formData); 
    // on submit whatever formData is, is packed into addItem and addItem is executed.
 setFormData({product: "", quantity: 0});
  }; // this Child will invoke the addItem function present in Parent.
  return (
    
    <form onSubmit={handleSubmit}> {/* handleSubmit is a intermediate function */}
      <h3>4- Shopping List Form </h3>
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
      <button > Add Item</button>
      <p>
        ________________________________________________________________________________________________
      </p>
    </form>
  );
}

