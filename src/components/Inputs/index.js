import { useState } from "react";
import "./Inputs.css";

const Inputs = (props) =>{
    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }

    const { type = "text" } = props
    

    const placeholderModif = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModif} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />
    </div>
}

export default Inputs;