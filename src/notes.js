const fs = require('fs');
const path = require('path');

let notes = [];

const getNotes = () => {
  try {
    const json = fs.readFileSync(path.resolve(__dirname, '../storage/notes.json'), 'UTF-8');
    notes = JSON.parse(json) || [];
  } catch (error) {
    notes = [];
    console.log('Gagal membaca berkas', error);
  }
  return notes;
};

const saveNotes = () => {
  const wStream = fs.createWriteStream(path.resolve(__dirname, '../storage/notes.json'), 'utf-8');

  wStream.end(JSON.stringify(notes));
};

notes = getNotes();

module.exports = { notes, getNotes, saveNotes };
