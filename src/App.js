import React from 'react'
import {useState, useMemo} from 'react'
import './App.css'
import ColorsConf from './components/ColorsConf.js'
import ColorPicker from './components/ColorPicker'
import NewColorPreview from './components/NewColorPreview'
import FilesHandler from './components/FilesHandler'
import Exceptions from './components/Exceptions.js'
import RivalIcon from './svg/RivalIcon'
import ReactTooltip from 'react-tooltip'
import ColorDrawer from './components/ColorDrawer'
import { ThemePresetData } from './components/ThemePresetData'

function App() {
  const [conf, setConf] = useState(ColorsConf)

  const onFileChosenComplete = (obj) => {
    setConf(obj)
  }

  const setIndex = (index) => {
    const colorObj = {...ThemePresetData[index].data}
    Object.keys(colorObj).forEach((key)=> {
      if (Exceptions.indexOf(key) !== -1) return

      colorObj[key] = `#${colorObj[key]}`
    })
    setConf(colorObj)
  }

  const ColorPickerList = useMemo(() => {
    const setColor = (label, color) => {
      setConf(
        {
          ...conf,
          [label]: color
        }
      )
    }

    return Object.keys(conf).map((key, index) =>{
      if (Exceptions.indexOf(key) !== -1) return null
      return (
        <ColorPicker key={index} setColor={setColor} color={conf[key]} label={key}></ColorPicker>
      )
    })
  }, [conf]
  )

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-link" onClick={() => window.open('https://twitter.com/8bitpimp', '_blank')}>
          <RivalIcon /><h2 style={{pointerEvents: 'none'}}>KILOCOLOR - A Phase Plant Theme Creator</h2>
        </div>
        <FilesHandler onFileChosenComplete={onFileChosenComplete} conf={conf}/>
      </header>
      <div className="main">
        <div className="left">
          <div style={{width: '100%',}}>
            <span style={{fontSize: 16, fontWeight: 700, color: 'white'}}>Preview</span>
          </div>
          <NewColorPreview {...conf}/>
        </div>
      </div>
      <ReactTooltip />
      <ColorDrawer ColorPickerList={ColorPickerList} setIndex={setIndex} colorOptions={ThemePresetData}/>
    </div>
  );
}

export default App;
