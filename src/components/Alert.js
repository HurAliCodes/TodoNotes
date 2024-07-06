import React from 'react';

const CustomAlert = ({ message, onClose }) => {


  return (
    <div className="custom-alert container">
      <div className="custom-alert-content" >
        {message}
      </div>
      <button className="custom-alert-button" onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default CustomAlert;