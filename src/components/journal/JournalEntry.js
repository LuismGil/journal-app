import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://www.faialprime.com.br/wp-content/uploads/2020/10/faial-ilhadocampeche-foto2.jpg)',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          lorem ipsum nos e ajskdjfkadsjfkds fkdsjf kdsjf kdsjf kds fjdskf{' '}
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
