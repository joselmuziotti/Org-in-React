import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer';

function App() {

  const [showForm, updateShowForm] = useState(false);
  const [collabs, updateCollabs] = useState([{
    id: uuid(),
    name:"Jose Luis Muziotti",
    photo:"https://github.com/joselmuziotti.png",
    puesto:"Desarrollador",
    team:"Front End",
    fav: true
  },
  {
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true
  }]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  const changeShow = () =>{
    updateShowForm(!showForm);
  }

  //Funcion para Registrar Collab
  const collabRegister = (collab) =>{
    console.log("New Collab:", collab);
    //spread operator ([...]), copia valores actuales del array (collabs) y luego agrega el nuevo objeto (collabs)
    updateCollabs([...collabs, collab]);
  }

  //Eliminar Collab
  const collabDelete = (id) =>{
    console.log("Eliminar Collab", id);
    const newCollabs = collabs.filter((collab) => collab.id !== id)
    updateCollabs(newCollabs)
  }

  //Actualizar color de Equipos
  const updateColor = (color, id) =>{

    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (newTeam) =>{
    console.log(newTeam)
    actualizarEquipos([...equipos, {...newTeam, id: uuid()}])
  }

  //Dar Like
  const like = (id) =>{
    console.log("like ", id);
    const collabUpdated = collabs.map((collab) =>{
      if(collab.id === id){
        collab.fav = !collab.fav
      }

      return collab
    })

    updateCollabs(collabUpdated)
  }

  //se recorre el array para conseguir solo el titulo y se guarda en una variable.
  const teamTitle = equipos.map((equipo) => equipo.titulo)

  return (
    <div>
      <Header />

      {/* {showForm ? <Form /> : <></>} */};

      {
      showForm && <Form 
                  equipos={teamTitle}
                  collabRegister={collabRegister}
                  crearEquipo={crearEquipo}
                  />
      };

      <MiOrg changeShow={changeShow}/>;

      {
        equipos.map( (team) => <Team 
                                data={team} 
                                key={team.titulo}
                                //filter se ocupa para filtrar del array [collabs] que busque el colaborador (collab),
                                //y devuelva el equipo de ese colaborador (collab.team) y verifique que sea igual al
                                //equipo de la lista de opciones y lo muestre en su equipo.
                                collabs={collabs.filter(collab => collab.team === team.titulo)}
                                collabDelete={collabDelete}
                                updateColor={updateColor}
                                like={like}
                                /> 
                    )
      };

      <Footer />
    </div>
  );
}

export default App;
