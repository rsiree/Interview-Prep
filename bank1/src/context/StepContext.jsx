import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const multiStepContext = createContext();

export default function StepContext(props) {
    const navigate = useNavigate();
    const [currentStep , setCurrentStep] = useState(1);
    const [userData , setUserData] = useState([]);
    const [finalData , setFinalData] = useState([]);
const [transferData , setTransferData] = useState([]);

  function submitData(){
        setFinalData(finalData => [...finalData,userData]);
        console.log(userData)
    axios.post("https://bankbackendmasai.herokuapp.com/add",userData);
        setUserData('');
        setCurrentStep(1);
        navigate("/employees");
    }

   function sendMoney() {
    axios.post("https://bankbackendmasai.herokuapp.com/employees/money" , transferData);
     navigate("/employees");
    }

    return (
       <multiStepContext.Provider value={{currentStep, setCurrentStep,userData , setUserData,finalData , setFinalData, submitData,transferData,setTransferData,sendMoney}}>
           {props.children}
       </multiStepContext.Provider>
    )
}
