import { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from 'nanoid';
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    content: "This is Your First Note!",
    date: new Date().toLocaleDateString()
    }
])

const addNote = (text) =>{
  const date = new Date();
  const newNote = {
    id: nanoid(),
    content: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NoteList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;