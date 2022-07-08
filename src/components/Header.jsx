import PropTypes from 'prop-types'
import Boton from './Boton'

const Header = ({titulo, onAdd, showAdd}) => {

    const onClick = () =>{
        console.log('click desde parent')
    }

  return (
    <header className='header'>
        <h2>{titulo}</h2>
        <Boton color={showAdd ? 'red' : 'green'} 
        texto={showAdd ? 'Cerrar' : 'Nueva'} onClick={onAdd}/>
    </header>
  )
}

// Así se le pasa un prop por default
Header.defaultProps = {
    titulo: 'default'
}

//Asignamos el tipo de valor al prop que vamos a pasarle
Header.propTypes ={
    titulo: PropTypes.string.isRequired
}

//Asignamos estilos
// const estilos = {
//     color:red, background:black
// }

export default Header