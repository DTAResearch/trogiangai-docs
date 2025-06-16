import React from 'react';

export default function GoalBox({ children }) {
  return (
    <div
      style={{
        background: 'var(--goalbox-bg)',
        color: 'var(--goalbox-text-color)',
        border: '2px solid #a569bd',
        borderRadius: '20px',
        padding: '1.75rem',
        margin: '2rem 0',
        boxShadow: '0 8px 20px rgba(165, 105, 189, 0.3)',
        backdropFilter: 'blur(10px)',
        fontSize: '1.05rem',
        lineHeight: '1.75',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.01)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(165, 105, 189, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(165, 105, 189, 0.3)';
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-14px',
          left: '20px',
          backgroundColor: '#a569bd',
          color: 'white',
          padding: '0.35rem 0.9rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
        }}
      >
        🎯 MỤC TIÊU
      </div>
      {children}
    </div>
  );
}
