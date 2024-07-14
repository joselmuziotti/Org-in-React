import "./Team.css"
import Cards from "../Cards"
import hexToRgba from "hex-to-rgba"

const Team = (props) =>{
    //Destructuracion, quiero tomar CP, CS y Titulo pero de donde? de data propiedad que esta en App.js
    const {colorPrimario, colorSecundario, titulo, id} = props.data
    const {collabs, collabDelete, updateColor, like} = props
    //es guardar los datos de props en variables, de una manera mas limpia.
    //con este metodo evitas colocar props.data.colorPrimario, etc.. y repetir codigo. simplifica mucho mas.
    const styleTitle = {borderColor: colorPrimario}
    const styleSection = {backgroundColor: hexToRgba(colorPrimario, 0.20)}
    

    return <>
    { 
        collabs.length > 0 &&
            <section className="team" style={styleSection}>
                <input 
                    className="input-color" 
                    type="color" 
                    value={colorPrimario}
                    onChange={(e) =>{
                        updateColor(e.target.value, id)
                    }}
                />
            <h3 style={styleTitle}>{titulo}</h3>
            <div className="colaboradores">
                {
                    collabs.map((collab, index) => <Cards 
                        data={collab} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        collabDelete={collabDelete}
                        like={like}
                        />)
                }
            </div>
        </section>
    }
    </>
}

export default Team;