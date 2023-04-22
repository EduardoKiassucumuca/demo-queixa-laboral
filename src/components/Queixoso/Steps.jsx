import React from "react"
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import "./Steps.css";

const Steps = ({currentStep}) => {
    return (
    <div className="steps">
       <div className="step active">
            <BsCircle/> 
            <p>Dados Pessoais</p>
            <span class="step1">1</span>
        </div> 
        <div className={`step ${currentStep >=1 ? "active":""}`}>
        <BsCircle/> 
            <p>Dados da Empresa</p>
            <span class="step2">2</span>
        </div> 
        <div className={`step ${currentStep >=2 ? "active":""}`} id="step-queixa">
        <BsCircle/> 
            <p>Queixa</p>
            <span class="step3">3</span>
        </div> 
    </div>
)};

export default Steps;