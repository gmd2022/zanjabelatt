import React, { useState } from 'react';

function Tab ({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: '0.3rem 0.75rem',
            background: open ? '#541f0b' : '#541f0b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {open ? '-' : '+'}
        </button>
      </div>

      {open && (
        <div style={{ padding: '0.5rem' ,border: 'none' ,backgroundColor:' #8e5325'}}>
          {children}
        </div>
      )}
    </div>
  );
}
export default Tab;