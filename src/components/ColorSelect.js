import React from 'react'

const ColorSelect = ({colorOptions, setIndex}) => {
  return (
    <div style={{width: '100%', display: 'flex', rowGap: '8px', flexDirection: 'column'}}>
      <label className="color-select-label" htmlFor="colorSelect">Select a Preset Theme</label>
      <div className="color-select-div" >
        <select id="color-select" onChange={e => {setIndex(e.target.value)}}>
          {colorOptions.map((item, index) => {
            const titleString = `${item?.title} by ${item?.author}`
            return <option key={index} value={index}>{titleString}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default ColorSelect
