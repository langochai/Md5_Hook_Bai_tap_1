import { useState } from 'react'
import './App.css'

function App() {
  let [type,setType] = useState("BMW");
  let [color,setColor] = useState("Red");
    const handleChange = (e,setState) =>{
        setState(e.target.value)
    }
  return (
    <>
        <label htmlFor="selectCar">Please choose a type:</label>
        <select name="selectCar" onChange={(e)=>{handleChange(e,setType)}}>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Volvo">Volvo</option>
        </select>
        <br/>
        <label htmlFor="selectColor">Please choose a color:</label>
        <select name="selectColor" onChange={(e)=>{handleChange(e,setColor)}}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
        </select>
        <p>You have selected {type} and {color}</p>
    </>
  )
}

export default App
