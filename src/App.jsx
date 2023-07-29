import React,{useState} from "react"

import Layout from "./components/layout"
import NumericInput from "./components/NumericInput"
import SliderInput from "./components/SliderInput"
import Calculatebutton from "./components/Calculatebutton"
import CalculatedAmount from "./components/CalculatedAmount"

function App() {
  const[IntiAmount, setInitAmount] = useState(0);
  const[Monthlycontribution, setMonthlycontribution] = useState(0);
  const[Interest, setInterest] = useState(0);
  const[Numberofyears, setNumberofyears] = useState(0);
  const[FinalValue, setfinalvalue] = useState(null);

  function CompoundInterest() {
    let total = parseInt(IntiAmount);
    let Annualcontibution = parseInt(Monthlycontribution) * 12;
    for(let i = 0; i <= parseInt(Numberofyears); i++){
      total += parseInt(Annualcontibution);
      total += 1 + parseInt(Interest/100);
    }
    setfinalvalue(total);
  }
  
  function reset() {
    setInitAmount(0);
    setMonthlycontribution(0);
    setInterest(0);
    setNumberofyears(0);
    setfinalvalue(null);
  }


  return (
    <Layout>
      {
        FinalValue ? (
          <CalculatedAmount value = {FinalValue} IntiAmount = {IntiAmount}
          Numberofyears = {Numberofyears} Monthlycontribution = {Monthlycontribution}
          Interest = {Interest} reset = {reset}/>
        ) : 
        (
          <>
            <NumericInput value ={IntiAmount} setValue = {setInitAmount} title = {'Intitial Amount'} symbol='₹'/>
            <NumericInput value ={Monthlycontribution} setValue = {setMonthlycontribution} title = {'Monthly Contribution'} symbol='₹'/>
            <NumericInput value ={Interest} setValue = {setInterest} title = {'Interest '} symbol='%'/>
            <SliderInput value = {Numberofyears} setValue = {setNumberofyears} title = {'Number Of Years'}/>
            <Calculatebutton evaluate = {CompoundInterest}/>
          </>
         
        )
      }
       
       
    </Layout>
  )
}

export default App
