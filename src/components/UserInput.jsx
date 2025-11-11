import { useState } from "react";
export default function UserInput(){
    const [userInput, setUserInput] = useState({
        initialInvestment:5000,
        annualInvestment:500,
        expectedReturn:4,
        duration:5
    });
    function handleChange(inputID,newVal){
        setUserInput(prevInput => {
            return {...prevInput,
            [inputID]: newVal};
        })
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input
                        type="number"
                        required
                        onChange={(event) => handleChange('initialInvestment',event.target.value)}
                        value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input
                        type="number"
                        required
                        onChange={(event) => handleChange('annualInvestment',event.target.value)}
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input
                        type="number" 
                        required 
                        onChange={(event) => handleChange('expectedReturn',event.target.value)}
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        onChange={(event) => handleChange('duration',event.target.value)}
                        value={userInput.duration}
                    />
                </p>
            </div>
        </section>
    );

}