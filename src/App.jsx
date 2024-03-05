import UsernameForm from "./UsernameForm";
import SignupForm from "./SignupForm";
import BettersignupForm from "./BetterSignupForm.component";
import ShoppingList from "./ShoppingList.component";
import FormDemo from "./FormDemo";
import "./App.css";

function App() {
  return (
    <>
      <FormDemo/>
      <ShoppingList />
      <BettersignupForm/>
      <SignupForm/>
      <UsernameForm/>
    </>
  );
}

export default App;
