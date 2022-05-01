import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/Testimonios.js'

function App() {
  return (
    <div className="App">
      
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
        imagen='emma'
        nombre='Emma Bostian'
        pais='Suecia'
        empresa='Spotify'
        testimonio='Pasion por el desarrolo web y por la musica'
        />
        
        <Testimonio 
        imagen='shawn'
        nombre='Shawn'
        pais='China'
        empresa='Amazon'
        testimonio='Ser el mayor vendedor de amazon'
        />

        <Testimonio 
        imagen='sarah'
        nombre='Sarah Bostian'
        pais='Nigeria'
        empresa='ChatDesk'
        testimonio='Pasion por el desarrolo web y por la musica'
        />
      </div>

    </div>
  );
}

export default App;
