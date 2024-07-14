import "./Cards.css"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Cards = (props) =>{
const { name, puesto, photo, team, id, fav} = props.data
const { colorPrimario, collabDelete, like } = props

    return <div className="cards">
        <IoMdCloseCircleOutline className="delete" onClick={() => collabDelete(id)}/>
        <div className="header" style={{backgroundColor: colorPrimario}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{puesto}</h5>
            { fav ?  <AiFillStar color="#FFEA00" onClick={() => like(id)}/> : <AiOutlineStar onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Cards;