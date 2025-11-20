import { useState } from "react";

export default function NoteCard({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleUpdate = () => {
    onUpdate(note.id, text);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition">
      {isEditing ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-800">{note.text}</p>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
