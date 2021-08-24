import React, {useState} from 'react'
import PaletteClose from '../svg/PaletteClose'
import PaletteOpen from '../svg/PaletteOpen'

const ColorDrawer = ({ColorPickerList}) => {
  const [show, setShow] = useState(true)

  return (
    <div className="colorDrawer" style={{left: show ? 0 : -288 }} >
      <div className="colorDrawer-subcontainer">
        <div style={{width: '100%',}}>
          <span style={{fontSize: 16, fontWeight: 700, color: 'white'}}>Colors</span>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          {ColorPickerList}
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        backgroundColor: '#222',
      }} onClick={() => setShow(!show)}>
        {show ? <PaletteOpen /> : <PaletteClose /> }
      </div>
    </div>
  )
}

export default ColorDrawer