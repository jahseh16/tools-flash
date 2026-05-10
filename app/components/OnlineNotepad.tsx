
'use client';

import { useState, useEffect } from 'react';

export default function OnlineNotepad() {
  const [notes, setNotes] = useState<Array<{id: string, title: string, content: string, date: string}>>([]);
  const [currentNote, setCurrentNote] = useState<string>('');
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [autoSaved, setAutoSaved] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem('toolifast-notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('toolifast-notes', JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    if (currentNote || currentTitle) {
      const timer = setTimeout(() => {
        if (selectedNoteId) {
          updateNote();
        }
        setAutoSaved(true);
        setTimeout(() => setAutoSaved(false), 2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentNote, currentTitle]);

  const createNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: currentTitle || 'Nueva nota',
      content: currentNote,
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
    setCurrentTitle('');
    setCurrentNote('');
  };

  const updateNote = () => {
    if (!selectedNoteId) return;
    
    setNotes(notes.map(note => 
      note.id === selectedNoteId 
        ? { ...note, title: currentTitle || 'Sin título', content: currentNote, date: new Date().toLocaleDateString() }
        : note
    ));
  };

  const selectNote = (note: any) => {
    setSelectedNoteId(note.id);
    setCurrentTitle(note.title);
    setCurrentNote(note.content);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNoteId === id) {
      setSelectedNoteId(null);
      setCurrentTitle('');
      setCurrentNote('');
    }
  };

  const clearEditor = () => {
    setSelectedNoteId(null);
    setCurrentTitle('');
    setCurrentNote('');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-200 bg-gray-50">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Mis Notas</h3>
                <button
                  onClick={clearEditor}
                  className="!rounded-button bg-yellow-600 text-white px-3 py-1 text-sm hover:bg-yellow-700 transition-colors"
                >
                  <i className="ri-add-line w-3 h-3 flex items-center justify-center"></i>
                  Nueva
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                {notes.length} nota{notes.length !== 1 ? 's' : ''} guardada{notes.length !== 1 ? 's' : ''}
              </div>
            </div>
            
            <div className="overflow-y-auto h-full">
              {notes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <i className="ri-sticky-note-line w-8 h-8 flex items-center justify-center mx-auto mb-2"></i>
                  <p>No hay notas guardadas</p>
                </div>
              ) : (
                <div className="space-y-1 p-2">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      onClick={() => selectNote(note)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedNoteId === note.id
                          ? 'bg-yellow-100 border-yellow-300'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 truncate">{note.title}</h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {note.content || 'Nota vacía'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{note.date}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNote(note.id);
                          }}
                          className="!rounded-button text-red-600 hover:bg-red-50 p-1 ml-2"
                        >
                          <i className="ri-delete-bin-line w-3 h-3 flex items-center justify-center"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-2xl">
                  📝
                </div>
                <div className="flex items-center space-x-2">
                  {autoSaved && (
                    <span className="text-sm text-green-600">
                      <i className="ri-check-line w-3 h-3 flex items-center justify-center"></i>
                      Guardado
                    </span>
                  )}
                  <button
                    onClick={createNewNote}
                    disabled={!currentNote && !currentTitle}
                    className="!rounded-button bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-700 transition-colors disabled:opacity-50"
                  >
                    {selectedNoteId ? 'Actualizar' : 'Guardar'}
                  </button>
                </div>
              </div>
              
              <input
                type="text"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
                placeholder="Título de la nota..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex-1 p-4">
              <textarea
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                placeholder="Escribe tus ideas aquí..."
                className="w-full h-full resize-none border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                maxLength={5000}
              />
              <div className="text-right text-sm text-gray-500 mt-2">
                {currentNote.length}/5000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
