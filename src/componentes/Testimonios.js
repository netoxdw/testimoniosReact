import React from 'react';
import '../style/Testimonio.css'

export function Testimonio (props){
  return (
    <div className='contenedor-testimonio'>

      <img className='img-testimonio' src={require(`./imagenes/testimonio-${props.imagen}.png`)} alt='img-emma'></img>
     
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> 
        <strong>{props.nombre}</strong> de {props.pais} </p>
        <p className='cargo-testimonio'>
           Ingeniera en softwre <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'> 
        {props.testimonio} </p>

      </div>
    </div>
      
  );
}

// export default Testimonio;