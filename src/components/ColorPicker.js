import React from 'react'
import { SketchPicker } from 'react-color'
import { useState } from 'react'

const ColorPicker = (props) => {
  const {color, setColor, label} = props
  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const styles = {
    color: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: color,
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    colorPicker: {
      position:'absolute',
      zIndex:'2',
    },
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  }

  const handleColorChange = (color) => {
    console.log(color)
    setColor(label, color.hex )
  }

  const handleClickSwatch = (e) => {
    setDisplayColorPicker(true)
  }

  const handleCloseColorPicker = (e) => {
    setDisplayColorPicker(false)
  }
  
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex 1 0"}}>
        <div className="colorPickerItem" >
          <div style={styles.swatch} onClick={handleClickSwatch}>
            <div style={styles.color} ></div>
          </div>
          <div>
            {displayColorPicker ? 
            <div style={styles.colorPicker}>
              <div style={styles.cover} onClick={handleCloseColorPicker}></div>
                <SketchPicker color={color} disableAlpha={true} onChange={handleColorChange}/>
            </div>
            : null}
          </div>
          <div className="cpLabel">
            <label>{props.label}</label>
          </div>
        </div>
      </div>
    </div>
  )


}

export default ColorPicker