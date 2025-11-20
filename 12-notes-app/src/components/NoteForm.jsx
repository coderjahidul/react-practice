import { useState } from 'react';

function NoteForm({ onAdd }) {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.trim()) return;
        onAdd(note);
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a new note..."
            className="flex-1 p-2 border rounded-lg focus:ring-indigo-400" />

            <button type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Add</button>
        </form>
    );
}

export default NoteForm