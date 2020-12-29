import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome tittle"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://learn.zoner.com/wp-content/uploads/2018/08/landscape-photography-at-every-hour-part-ii-photographing-landscapes-in-rain-or-shine.jpg"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
};
