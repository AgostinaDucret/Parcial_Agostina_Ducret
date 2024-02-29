import React, { useState } from "react";

const Form = () => {

  const estiloMascota = {
    alignItems: 'center',
    border:'2px solid #fff',
    borderRadius: '10px',
    backgroundColor: '#17A589',
    color: '#F5B7B1',
  }

  const estiloFrom = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:'2px solid',
    borderRadius: '10px',
    backgroundColor: '#17A589',
    color: '#F5B7B1',
    fontSize: '30px',
  }

  const estiloBotones = {
    margin: '20px',
    fontSize: '20px',
    color: '#F1948A'
  }



const [mascota, setMascota]= useState({
  animal: "",
  nombre: "",
})

const [mostar, setMostrar] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault()

  if(mascota.animal.length >=3 && !mascota.animal.startsWith(" ") && mascota.nombre.length >= 6){
    setMostrar(true)
    setError(false)
  }else {
    setError(true)
  }
}

  return (
    <div> 
      {mostar ? null :
     
      <form onSubmit={handleSubmit} style={estiloFrom}>
        <label>Animal: </label>
        <input type="text" onChange={(event) => setMascota({...mascota, animal: event.target.value})}/>
        <label>Nombre:</label>
        <input type="text" onChange={(event) => setMascota({...mascota, nombre: event.target.value})}/>
        <button style= {estiloBotones}>Enviar</button>
      </form>
}
{mostar ?
<div style = {estiloMascota}> 
<h2>Tu mascota es: {mascota.animal} </h2>
<h2>Su nombre es: {mascota.nombre} </h2>
</div>

: null
}
{error && <h3>Por favor chequea que la información sea correcta.</h3>}
    </div>
  );
};

export default Form;
