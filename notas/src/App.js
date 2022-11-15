import './App.css';
import { useState } from 'react';
import { Notes } from './Notes';


function App(props) {

  // se declara como estado inicial las notas ya creadas en la lista
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")

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
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(addNotes))
    console.log(addNotes)
  }


  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {/*Se utiliza el metodo map para poder extraer el contenido de la lista de elementos*/}
        {notes.map((notes) => (
          <Notes key={notes.id} content={notes.content} date={notes.date} category={notes.category} />
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
