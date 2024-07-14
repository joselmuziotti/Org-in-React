import "./ListaOps.css"

const ListaOps = (props)=>{

const manejarCambio = (e) =>{
    console.log("cambio", e.target.value);
    props.setTeam(e.target.value);
}

    return <div className="lista-ops">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
            {/* //recibe props de lista de equipos en App.js */}
            { props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)} 
        </select>
    </div>
}

export default ListaOps;