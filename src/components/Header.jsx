import PropTypes from 'prop-types'
import Boton from './Boton'

const Header = ({titulo}) => {

    const onClick = () =>{
        console.log('click desde parent')
    }

  return (
    <header className='header'>
        <h2>{titulo}</h2>
        <Boton color='green' texto='Nueva' onClick={onClick}/>
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