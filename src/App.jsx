import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment:5000,
        annualInvestment:500,
        expectedReturn:4,
        duration:5
    });
    function handleChange(inputID,newVal){
        setUserInput(prevInput => {
            return {...prevInput,
            [inputID]: +newVal};
        })
    }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}/>
      <Result input={userInput}/>
    </>
  );
}

export default App;
