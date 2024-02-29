import React from "react";
import Form from "./Form";

const Card = () => {

  const estiloCard = {
    alignItems: 'center',
    padding: '50px',
    border:'2px solid',
    color: '#F1948A',
  }


  return (
    <div style={estiloCard}>
      <h1>Carga a tu mascota</h1>
    
      <Form />
    
    </div>
  );
};

export default Card;
