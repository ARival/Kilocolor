import React from 'react'
import { Exceptions } from './Exceptions.js'

const FilesHandler = (props) => {
  const {onFileChosenComplete, conf} = props

  const onFileChosen = (file) => {
    var fileReader = new FileReader()
    fileReader.onload= (e) => {
      const content = fileReader.result
      var j = JSON.parse(content)
      Object.keys(j).forEach((key)=> {
        if (Exceptions.indexOf(key) !== -1) return

        j[key] = `#${j[key]}`
      })
      console.log(j);
      onFileChosenComplete(j)
    }
    fileReader.readAsText(file)
  }

  const onFileSave =(e)=> {
    console.log("filesave")
    const obj = {...conf}
    Object.keys(obj).forEach((key)=> {
      if (Exceptions.indexOf(key) !== -1) return
      obj[key] = obj[key].substring(1)
    })
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/javascript;charset=utf-8' })

    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'colors.conf';
    a.click();
  }

  return (
    <div className="FilesHandler">
      <div style={{display: 'flex', flexDirection: 'column',}}>
        {/* File Loader */}
        <label className="button" htmlFor="file" >Load File</label>
        <input type='file'
          id='file'
          className='input-file'
          accept='.conf'
          onChange={(e)=>{onFileChosen(e.target.files[0])}}
          />

      </div>
      <div style={{display: 'flex', flexDirection: 'column',}}>
        <label className="button" htmlFor="fileSave" style={{textAlign:"left", marginTop:0}}>Save File</label>
        <input type='button'
          id='fileSave'
          className='filesave'
          accept='.conf'
          value='save as'
          onClick={(e)=>{onFileSave()}}
          />
      </div>

    </div>
  )
}

export default FilesHandler