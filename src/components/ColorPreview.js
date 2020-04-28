import React from 'react'

const ColorPreview = (props) => {
  // The Shape Styles are all here
  const window_backgroundStyle={
    position:"absolute",
    height:500,
    width:500,
    background:props.window_background,
  }
  const main_backgroundStyle={
    position:"absolute",
    height:496,
    top:2,
    left:2,
    width:496,
    background:props.main_background,
  }
  const panel_backgroundStyle={
    position:"absolute",
    top: 240,
    left: 8,
    height: 250,
    width: main_backgroundStyle.width - 16,
    background:props.panel_background,
  }

  const control_backgroundStyle={
    position:"absolute",
    top:16,
    left:16,
    height:100,
    width:264,
    background:props.control_background,
  }
  const foregroundStyle={
    position:"absolute",
    top:0,
    left:0,
    height:3,
    width:main_backgroundStyle.width,
    background:props.foreground,
  }
  const knobStyle = {
    position:"absolute",
    top:150,
    left:30,
    height:0,
    width:0,
    borderTop: `30px solid ${props.passive}`,
    borderLeft: `30px solid ${props.active}`,
    borderRight: `30px solid ${props.passive}`,
    borderBottom: `30px solid transparent`,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    inside: {
      position:"absolute",
      top:-20,
      left:-20,
      height:0,
      width:0,
      border: `20px solid ${props.knob}`,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    }
  }

  const modulationStyle = {
      position:"absolute",
      top:205,
      left:50,
      height:0,
      width:0,
      border: `10px solid`,
      borderColor: `${props.modulation}`,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
  }
  
  const audio_rate_modulationStyle = {
    borderColor: `${props.audio_rate_modulation}`
  }
  const aux_modulationStyle = {
    borderColor: `${props.aux_modulation}`
  }
  
  const modulationBackgroundStyle = {
      position:"absolute",
      top:-9,
      left:0,
      height:0,
      width:0,
      border: `9px solid`,
      borderLeft: 0,
      borderColor: `${props.modulation_background}`,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
  }

  const SquareWave = {
    left: 5,
    top: 5,
    position:`absolute`,
    leftSide: {
      position:`absolute`,
      backgroundImage: `linear-gradient(${props.active+ "66"}, transparent)`,
      borderLeft:`2px solid ${props.active}`,
      borderTop:`2px solid ${props.active}`,
      borderRight:`2px solid ${props.active}`,
      width: (control_backgroundStyle.width / 2)-9,
      height: control_backgroundStyle.height-12,
    },
    rightSide: {
      position:`absolute`,
      left: (control_backgroundStyle.width / 2)-7,
      backgroundImage: `linear-gradient(transparent, ${props.active + "66"})`,
      borderLeft:`2px solid ${props.active}`,
      borderBottom:`2px solid ${props.active}`,
      borderRight:`2px solid ${props.active}`,
      width: (control_backgroundStyle.width / 2)-7,
      height: control_backgroundStyle.height-12,
    }
  }

  const muteSoloButtons = {
    width:20,
    height:20,
    border: `1px solid`,
    position: `absolute`,
    borderRadius: 4,
    mute: {
      backgroundColor: props.mute,
      borderColor: props.mute,
      top:16,
      left:control_backgroundStyle.width + 30,
    },
    solo: {
      backgroundColor: props.solo,
      borderColor: props.solo,
      top:16,
      left:control_backgroundStyle.width + 55,
    },
  }

  const text = {
    position: 'absolute',
    textAlign: 'center'
  }
  

  return (
    <div style={{margin:'10px 10px 10px 10px', position:"relative"}}>
      <div style={window_backgroundStyle}></div>
      <div style={main_backgroundStyle}>
      <div style={panel_backgroundStyle}></div>
        <div style={control_backgroundStyle}>
          <div style={SquareWave}>
            <div style={SquareWave.leftSide} />
            <div style={SquareWave.rightSide} />
          </div>
        </div>

        <div style={foregroundStyle}></div>

        {/* Knobs */}
        <div style={knobStyle}>
          <div style={knobStyle.inside}> </div>
        </div>
        <div style={modulationStyle} >
          <div style={modulationBackgroundStyle} />
        </div>

        <div style={{...knobStyle, left:'105px'}}>
          <div style={knobStyle.inside}> </div>
        </div>
        <div style={{...modulationStyle, ...audio_rate_modulationStyle, left:'125px'}}>
          <div style={modulationBackgroundStyle} />
        </div>

        <div style={{...knobStyle, left:'180px'}}>
          <div style={knobStyle.inside}> </div>
        </div>
        <div style={{...modulationStyle, ...aux_modulationStyle, left:'200px'}}>
          <div style={modulationBackgroundStyle} />
        </div> 

        {/* Text */}
        <div style={{...text, top:'125px', left:'45px',color:props.text}}>text</div>
        <div style={{...text, top:'125px', left:'95px', color:props.unimportant_text}}>unimportant</div>
         
        {/* Mute/Solo */}
        <div style={{...muteSoloButtons, ...muteSoloButtons.mute}} />
        <div style={{...muteSoloButtons, ...muteSoloButtons.solo}} />
      </div>
    </div>
  )

}

export default ColorPreview