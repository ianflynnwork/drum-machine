import React, { useState } from "react";
import DrumPad from "./comps/DrumPad";


function App() {
  const [soundText, setSoundText] = useState('');
  
  const drumData = [
    {keyCode: 81, id: 'snare1', letter: 'Q', src: 'https://drumsoundz.com/Snare1.wav'},
    {keyCode: 87, id: 'snare2', letter: 'W', src: 'https://drumsoundz.com/Snare2.wav'},
    {keyCode: 69, id: 'snare3', letter: 'E', src: 'https://drumsoundz.com/Snare3.wav'},
    {keyCode: 65, id: 'closed-hat', letter: 'A', src: 'https://drumsoundz.com/Hat%20Closed.wav'},
    {keyCode: 83, id: 'symbol1', letter: 'S', src: 'https://drumsoundz.com/Crash-01.wav'},
    {keyCode: 68, id: 'symbol2', letter: 'D', src: 'https://drumsoundz.com/Crash-02.wav'},
    {keyCode: 90, id: 'symbol3', letter: 'Z', src: 'https://drumsoundz.com/Crash-03.wav'},
    {keyCode: 88, id: 'bass1', letter: 'X', src: 'https://drumsoundz.com/Bassdrum-02.wav'},
    {keyCode: 67, id: 'bass2', letter: 'C', src: 'https://drumsoundz.com/Bassdrum-03.wav'},
    //{id: 'bass3', letter: 'V', src: 'https://drumsoundz.com/Bassdrum-04.wav'},
    //{id: 'sfx1', letter: 'F', src: 'https://drumsoundz.com/SFX-03.wav'},
    //{id: 'sfx2', letter: 'R', src: 'https://drumsoundz.com/SFX-04.wav'},
    //{id: 'sfx3', letter: 'T', src: 'https://drumsoundz.com/Tom%20H.wav'},
    //{id: 'sfx4', letter: 'G', src: 'https://drumsoundz.com/Tom%20L.wav'}
  ];

  return (
    <div id='drum-machine'>
      <div id="display"></div>
      {drumData.map(pad => (
        <DrumPad 
          pad={pad}
          key={pad.id}
          setSoundText={ setSoundText }
        />
      ))}
      
    </div>
  );
}

export default App;