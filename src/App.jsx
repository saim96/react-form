import UsernameForm from "./UsernameForm";
import SignupForm from "./SignupForm";
import BettersignupForm from "./BetterSignupForm.component";
import ShoppingListForm from "./ShoppingListForm.component";
import ShoppingList from "./ShoppingList.component";
import "./App.css";

function App() {
  return (
    <>
      <ShoppingList />
      <ShoppingListForm />
      <BettersignupForm />
      <SignupForm />
      <UsernameForm />
    </>
  );
}

export default App;
