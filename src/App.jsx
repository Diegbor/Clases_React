import { useState } from "react"
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"

function App() {

  const [showAddTarea, setShowAddTarea] = useState(false)

  const [tareas, setTareas] = useState([
    {
        id:1,
        texto:'Ir al doctor',
        fecha: '26 junio del 2022',
        terminada:true
    },
    {
        id:2,
        texto:'Ir al cine',
        fecha: '10 julio del 2022',
        terminada:false
    },
    {
        id:3,
        texto:'Ir al super',
        fecha: '28 julio del 2022',
        terminada:false
    }
  ])

  //Agregar una tarea
  const addTarea = (tarea) => {
    // console.log(tarea)
    const id = Math.floor(Math.random()*10000)+1
    const nuevaTarea = {id, ...tarea}
    setTareas([...tareas, nuevaTarea])
  }

  //Borrar tarea
  const deleteTarea = (id) =>{
    // console.log('Borrar', id)
    setTareas(tareas.filter(tarea=>tarea.id !== id))
  }

  //Toggle terminado
  const toggleTerminado = (id) =>{
    // console.log(id)
    setTareas(tareas.map((tarea) => 
    tarea.id === id ? {...tarea,terminada: !tarea.terminada} : tarea))
  }

  return (
    <div className='container'>
      <Header titulo='Administrador de tareas' 
      onAdd={()=>setShowAddTarea(!showAddTarea)} showAdd={showAddTarea}/>
      {showAddTarea && <AddTarea onAdd={addTarea}/>}
      {tareas.length>0 
      ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado}/>) 
      : ('No hay tareas para mostrar')}
    </div>
  )
}

export default App
