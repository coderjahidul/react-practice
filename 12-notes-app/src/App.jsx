import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), text: note }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, newText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: newText } : note)));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          📝 My Notes App
        </h1>

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />

        <NoteForm onAdd={addNote} />

        <div className="mt-6 grid gap-4">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onUpdate={updateNote}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No notes found...</p>
          )}
        </div>
      </div>
    </div>
  );
}
