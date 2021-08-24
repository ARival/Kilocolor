import React from 'react'

const ColorPicker = (props) => {
  const {color, setColor, label} = props

  const handleColorChange = (e) => {
    console.log(e.target.value)
    const color = e.target.value
    if (color) setColor(label, color)
  }

  return (
    <div style={{display:"flex", position: 'relative'}}>
      <input data-tip={props.label} className="color" type="color" id="color" value={color} name="color" onChange={handleColorChange}></input>
    </div>
  )
}

export default ColorPicker
