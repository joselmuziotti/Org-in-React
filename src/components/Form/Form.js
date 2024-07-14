import { useState } from "react";
import "./Form.css";
import Inputs from "../Inputs";
import ListaOps from "../ListaOps";
import Boton from "../Boton";

const Form = (props) =>{
    const [name, setName] = useState('');
    const [puesto, setPuesto] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

//variables para conseguir funcion que esta en App.js como props de Form y props de array equipos
    const { collabRegister, equipos, crearEquipo } = props;

    const manejarSubmit = (e) =>{
        e.preventDefault()
        console.log("Formulario enviado");

        let datosAEnviar = {
            name,
            puesto,
            photo,
            team
        }

        collabRegister(datosAEnviar);
        
    }

    const manejarNewTeam = (e) =>{
        e.preventDefault()
        crearEquipo({title: title, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Inputs 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={name} 
                setValor={setName}
            />
            <Inputs 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                setValor={setPuesto}
            />
            <Inputs 
                title="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={photo} 
                setValor={setPhoto}
            />
            <ListaOps 
                valor={team}
                setTeam={setTeam}
                equipos={equipos} //lista de los equipos (array) en App.js
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Inputs 
                title="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={title} 
                setValor={setTitle}
            />
            <Inputs 
                title="Color" 
                placeholder="Ingresar color en HEX" 
                required 
                valor={color} 
                setValor={setColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>;
}

export default Form;