import React from 'react'

const ColorPicker = (props) => {
  const {color, setColor, label} = props

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
    cpLabel: {
      color: 'white',
      position: 'absolute',
      width: 'calc(100% - 16px)',
      padding: '0px 12px',
      textAlign: 'center',
      fontWeight: 'normal',
      bottom: 8,
      lineHeight: '24px',
      pointerEvents: 'none',
    },
    input: {
      border: 'none',
      padding: 0,
      width: 100,
      height: 30,
      borderRadius: 12,
    }

  }

  const handleColorChange = (e) => {
    console.log(e.target.value)
    const color = e.target.value
    if (color) setColor(label, color)
  }

  return (
    <div style={{display:"flex", position: 'relative'}}>
      <input className="color" type="color" id="color" defaultValue={color} name="color" onChange={handleColorChange}></input>
      <div style={styles.cpLabel}>{props.label}</div>
      {/* <label style={styles.cpLabel} htmlFor="color">{props.label}</label> */}
    </div>
  )


}

export default ColorPicker
