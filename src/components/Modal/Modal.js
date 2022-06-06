import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';



export const Modal = ({ isOpen, hide, children }) => {
  return (  
    isOpen
    ? ReactDOM.createPortal(
        <div>
          <div className='modalBg' onClick={hide}></div>
          <div className= 'container'>
            <div className='modal'>
              <button className='closeBtn' onClick={hide}>
                &times;
              </button>
              <div className='content'>{children}</div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null
)
}


