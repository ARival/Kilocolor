import React from 'react'

const ColorPreview = (props) => {
  const {
    window_background,
    main_background,
    panel_background,
    control_background,
    foreground,
    passive,
    handle,
    encoder,
    active,
    knob,
    modulation,
    audio_rate_modulation,
    aux_modulation,
    modulation_background,
    mute,
    solo,
    disabled_tint,
    text,
    unimportant_text,
  } = props
  // The Shape Styles are all here
  const window_backgroundStyle={
    position:"absolute",
    height:500,
    width:492,
    background: window_background,
  }
  const main_backgroundStyle={
    position:"absolute",
    height:496,
    top:2,
    left:2,
    width:488,
    background: main_background,
  }
  const panel_backgroundStyle={
    position:"absolute",
    top: 240,
    left: 8,
    height: 170,
    width: main_backgroundStyle.width - 16,
    background: panel_background,
  }

  const panel_background_textStyle={
    position:"absolute",
    top: 466,
    left: 415,
    height: 22,
    width: 64,
    background: panel_background,
  }

  const control_backgroundStyle={
    position:"absolute",
    top:16,
    left:16,
    height:100,
    width:264,
    background: control_background,
  }
  const foregroundStyle={
    position:"absolute",
    top:0,
    left:0,
    height:3,
    width:main_backgroundStyle.width,
    background: foreground,
  }
  const knobStyle = {
    position:"absolute",
    top:150,
    left:30,
    height:0,
    width:0,
    borderTop: `30px solid ${encoder}`,
    borderLeft: `30px solid ${active}`,
    borderRight: `30px solid ${encoder}`,
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
      border: `20px solid`,
      borderColor: knob,
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
      borderColor: `${modulation}`,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
  }
  
  const audio_rate_modulationStyle = {
    borderColor: `${audio_rate_modulation}`
  }
  const aux_modulationStyle = {
    borderColor: `${aux_modulation}`
  }
  
  const modulationBackgroundStyle = {
      position:"absolute",
      top:-9,
      left:0,
      height:0,
      width:0,
      border: `9px solid`,
      borderLeft: 0,
      borderColor: `${modulation_background}`,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
  }

  const SquareWave = {
    left: 5,
    top: 5,
    position:`absolute`,
    leftSide: {
      position:`absolute`,
      backgroundImage: `linear-gradient(${active+ "66"}, transparent)`,
      borderLeft:`2px solid ${active}`,
      borderTop:`2px solid ${active}`,
      borderRight:`2px solid ${active}`,
      width: (control_backgroundStyle.width / 2)-9,
      height: control_backgroundStyle.height-12,
    },
    rightSide: {
      position:`absolute`,
      left: (control_backgroundStyle.width / 2)-7,
      backgroundImage: `linear-gradient(transparent, ${active + "66"})`,
      borderLeft:`2px solid ${active}`,
      borderBottom:`2px solid ${active}`,
      borderRight:`2px solid ${active}`,
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
      backgroundColor: mute,
      borderColor: mute,
      top:16,
      left:control_backgroundStyle.width + 30,
    },
    solo: {
      backgroundColor: solo,
      borderColor: solo,
      top:16,
      left:control_backgroundStyle.width + 55,
    },
  }

  const textStyle = {
    position: 'absolute',
    textAlign: 'center'
  }

  // set up colors for disabled tint
  const disabledRGBKnob = colorAdjust(disabled_tint, -95)
  const disabledRGBText = colorAdjust(disabled_tint, -50)
  
  const whiteKeyColor = handle
  const blackKeyColor = text

  return (
    <div style={{margin:'10px 10px 10px 10px', position:"relative"}}>
      <div id="windows_background" style={window_backgroundStyle}></div>
      <div id="main_background" style={main_backgroundStyle}>
        <div id="panel_background" style={panel_backgroundStyle}></div>
        <div id="control_background" style={control_backgroundStyle}>
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

        <div style={{...knobStyle, 
          borderTop: `30px solid ${disabled_tint}`,
          borderLeft: `30px solid ${disabled_tint}`,
          borderRight: `30px solid ${disabled_tint}`,
          left:'180px'}}>
          <div style={{...knobStyle.inside, borderColor: disabledRGBKnob}}> </div>
        </div>
        <div style={{...modulationStyle, ...aux_modulationStyle, left:'200px'}}>
          <div style={modulationBackgroundStyle} />
        </div> 

        {/* Text */}
        <div style={{...textStyle, top:'125px', left:'45px',color:text}}>text</div>
        <div style={{...textStyle, top:'125px', left:'105px', color:unimportant_text}}>unimport</div>
        <div style={{...textStyle, top:'125px', left:'180px', color:disabledRGBText}}>disabled</div>

        
        <div id="panel_background_text" style={panel_background_textStyle}></div>
        <div style={{...textStyle, top:'465px', left:'420px', color:passive}}>passive</div>
         
        {/* Mute/Solo */}
        <div style={{...muteSoloButtons, ...muteSoloButtons.mute}} />
        <div style={{...muteSoloButtons, ...muteSoloButtons.solo}} />

        {/* Piano Roll */}
        <svg style={{position:`absolute`,left:8, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:58, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="48" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="58" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="53" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:126, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:176, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="48" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="58" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="53" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:244, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:294, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="48" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="58" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="53" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:362, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
        <svg style={{position:`absolute`,left:412, top:420}}>
            <rect width="10" height="40" style={{fill:whiteKeyColor}} />
            <rect x="10" y="23" width="5" height="17" style={{fill:whiteKeyColor}} />
              <rect x="12" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="22" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="17" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="30" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="40" width="6" height="40" style={{fill:whiteKeyColor}} />
            <rect x="35" y="23" width="16" height="17" style={{fill:whiteKeyColor}} />
              <rect x="48" width="8" height="21" style={{fill:blackKeyColor}} />
            <rect x="58" width="8" height="40" style={{fill:whiteKeyColor}} />
            <rect x="53" y="23" width="10" height="17" style={{fill:whiteKeyColor}} />
        </svg>
      </div>
    </div>
  )

}

// jacked from stackoverflow
const colorAdjust = (color, amount) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export default ColorPreview