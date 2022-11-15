import './App.css';
import { useEffect, useState } from 'react';
import { Notes } from './Notes';
import { getAllNotes } from './Servicios/GetAllNotes';
import { createNote } from './Servicios/CreateNotes';

function App() {

  // se declara como estado inicial [] vacio para luego colocarle las notas
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setloading] = useState(true)

  /*                            METODO UTILIZADO CON FETCH 
  useEffect(() =>{  
    setloading(true)
  // Pone un tiempo de carga ↓
  setTimeout(() =>{
  // realiza el fetch de la URL ↓
  fetch("https://jsonplaceholder.typicode.com/posts")
  // convierte el la promesa en un JSON ↓
  .then((response) => response.json())
  .then((json) => {
    setNotes(json)
    setloading(false)
  })
  }, 2000)
  },[])
  */


  useEffect(() => {
    setloading(true)  //seteo que las notas comenzaron a cargar
    getAllNotes().then((notes) => {
          setNotes(notes) 
          setloading(false) //seteo que las notas ya cargaron
        })  
  }, [])


  // se crea evento el cual toma todo lo escrito en el input
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  //se utiliza el metodo para el cual al hacer click en "crear nota" concatena la lista de notas con la creada
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("se creo")
    const addNotes = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }


    createNote(addNotes)
    .then(newNote => {
      setNotes((notes) => notes.concat(newNote))
    })
    
  }


  return (
    <div>
      <h1>Notas</h1>
      {loading ? "Cargando..." : ""}
      <ul>
        {/*Se utiliza el metodo map para poder extraer el contenido de la lista de elementos*/}
        {notes.map((notes) => (
          <Notes key={notes.id} {...notes} />
        ))}
        <div>
          {/* recordar utilizar el onSubmit dentro del form */}
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Create note</button>
          </form>
        </div>
      </ul>
    </div>
  )

}

export default App;