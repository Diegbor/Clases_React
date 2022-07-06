const tareas = [
    {
        id:1,
        texto:'ir al doctor',
        fecha: '26 junio del 2022',
        terminada:true
    },
    {
        id:2,
        texto:'ir al cine',
        fecha: '10 julio del 2022',
        terminada:false
    },
    {
        id:3,
        texto:'ir al super',
        fecha: '28 julio del 2022',
        terminada:false
    }
]

const Tareas = () => {
  return (
    <>
        {tareas.map((tarea)=>(<h3 key={tarea.id}>{tarea.texto}</h3>))}
    </>
  )
}

export default Tareas