import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  // ValidatedShoppinglistform is expecting addItem function. we need to call this function when the form is submitted
  const [formData, setFormData] = useState({
    product: "",
    quantity: 0,
  });
  const [productIsValid, setProductIsValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };

  const handleChange = (evt) => {
    if (evt.target.name === "product") {
      validate(evt.target.value);
    }

    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    //Event handler functions expect an event object as a parameter.
    e.preventDefault();
    if (productIsValid) {
      addItem(formData); // on submit whatever formData is, is packed into addItem and addItem is executed.
      setFormData({ product: "", quantity: 0 });
    } // this Child will invoke the addItem function present in Parent.
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* handleSubmit is a intermediate function */}
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
      {!productIsValid && (
        <span style={{ color: "red", margin: "5px", fontSize: "20px" }}>!</span>
      )}
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
      <button
        disabled={!productIsValid}
        style={{ color: "green", margin: "5px", fontSize: "10px" }}
      >
        Add Item
      </button>
      <p>
        ________________________________________________________________________________________________
      </p>
    </form>
  );
}
