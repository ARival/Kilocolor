import React from 'react'
import {useState} from 'react'
import './App.css'
import ColorsConf from './components/ColorsConf.js'
import ColorPicker from './components/ColorPicker'
import ColorPreview from './components/ColorPreview'
import FilesHandler from './components/FilesHandler'
import Exceptions from './components/Exceptions.js'

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

  const ColorPickerList = Object.keys(conf).map((key) =>{
      if (Exceptions.indexOf(key) != -1) return
      return (
        <ColorPicker setColor={setColor} color={conf[key]} label={key}></ColorPicker>
      )
    } 
  )

  return (
    <div className="App">
      <header className="App-header">
        <p>Kilohearts Color Picker by <a href="https://twitter.com/8bitpimp" target="_blank">A_Rival</a></p>
      </header>
      <div className="main">
        <div className="left">
          {ColorPickerList}
        </div>
        <div className="right">
          <ColorPreview {...conf}/>
          <FilesHandler onFileChosenComplete={onFileChosenComplete} conf={conf}/>
        </div>
      </div>
    </div>
  );
}

export default App;
