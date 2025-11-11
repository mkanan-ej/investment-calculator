import {calculateInvestmentResults} from '../util/investment.js'
export default function Result({input}){
    const resultData = calculateInvestmentResults(input);
    return(
        <p>res</p>
    );
}