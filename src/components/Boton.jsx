const Boton = ({color, texto, onClick}) => {

    // const onClick = () =>{
    //     console.log('click')
    // }

  return (
    <button 
    onClick={onClick}
    style={{background: color}} className='btn'>{texto}</button>
  )
}

export default Boton