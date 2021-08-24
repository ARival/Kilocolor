import React from 'react'
import {useState} from 'react'
import './App.css'
import ColorsConf from './components/ColorsConf.js'
import ColorPicker from './components/ColorPicker'
import NewColorPreview from './components/NewColorPreview'
import FilesHandler from './components/FilesHandler'
import Exceptions from './components/Exceptions.js'
import RivalIcon from './svg/RivalIcon'

function App() {
  const [conf, setConf] = useState(ColorsConf)
  const setColor = (label, color) => {
    setConf(
      {
        ...conf,
        [label]: color
      }
    )
  }

  const onFileChosenComplete = (obj) => {
    setConf(obj)
  }

  const ColorPickerList = Object.keys(conf).map((key, index) =>{
      if (Exceptions.indexOf(key) !== -1) return null
      return (
        <ColorPicker key={index} setColor={setColor} color={conf[key]} label={key}></ColorPicker>
      )
    } 
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
        <div className="right">
          <NewColorPreview {...conf}/>
        </div>
        <div className="left">
          {ColorPickerList}
        </div>
      </div>
    </div>
  );
}

export default App;
