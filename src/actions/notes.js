import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      slug: '',
      body: '',
      date: new Date().getTime(),
    };

    try {
      const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
      const docDos = await db.collection(`admin/journal/notes`).add(newNote);

      //console.log('doc: ', doc);

      dispatch(activeNote(doc.id, docDos.id, newNote));
      dispatch(addNewNote(doc.id, newNote));
    } catch (error) {
      console.log(error);
    }
  };
};

export const activeNote = (id, idDos, note) => ({
  type: types.notesActive,
  payload: {
    id,
    idDos,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = uid => {
  return async dispatch => {
    const notes = await loadNotes(uid);
    console.log('notes', notes);
    console.log('uid', uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = notes => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = note => {
  console.log('startSaveNote paso 2 !importante"', note);

  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const { notes } = getState();
    const { active } = notes;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    //delete noteToFirestore.id;

    console.log('Notes ID', note);
    console.log('Notes ID', noteToFirestore);

    const docUno = await db
      .doc(`${uid}/journal/notes/${note.id}`)
      .update(noteToFirestore);

    await db.doc(`admin/journal/notes/${note.idDos}`).update(noteToFirestore);

    //dispatch(addNewNote(docDos, noteToFirestore));
    dispatch(refreshNote(note.id, noteToFirestore));

    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = file => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));

    Swal.close();
  };
};

export const startDeleting = id => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    await db.doc(`admin/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = id => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
