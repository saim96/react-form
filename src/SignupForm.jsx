import { useState } from "react";
function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
    <h3>2- Signup Form</h3>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="username"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="username"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>________________________________________________________________________________________________</p>

    </div>
  );
}

export default SignupForm;
