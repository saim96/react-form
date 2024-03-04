import { useState } from "react";
function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;

    setFormData((currData) => { // take whatever's current data
      currData[changedField] = newValue; //update the field, whatever the correct field is wit the new value and then return a copy of the object
      return { ...currData }; //return the copy of that object
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
