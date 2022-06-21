


function DrumPads() {

    const drumData = [
        {id: 'snare1', letter: 'Q', src: 'https://drumsoundz.com/Snare1.wav'},
        {id: 'snare2', letter: 'W', src: 'https://drumsoundz.com/Snare2.wav'},
        {id: 'snare3', letter: 'E', src: 'https://drumsoundz.com/Snare3.wav'},
        {id: 'closed-hat', letter: 'A', src: 'https://drumsoundz.com/Hat%20Closed.wav'},
        {id: 'symbol1', letter: 'S', src: 'https://drumsoundz.com/Crash-01.wav'},
        {id: 'symbol2', letter: 'D', src: 'https://drumsoundz.com/Crash-02.wav'},
        {id: 'symbol3', letter: 'Z', src: 'https://drumsoundz.com/Crash-03.wav'},
        {id: 'bass1', letter: 'X', src: 'https://drumsoundz.com/Bassdrum-02.wav'},
        {id: 'bass2', letter: 'C', src: 'https://drumsoundz.com/Bassdrum-03.wav'},
        {id: 'bass3', letter: 'V', src: 'https://drumsoundz.com/Bassdrum-04.wav'},
        {id: 'sfx1', letter: 'F', src: 'https://drumsoundz.com/SFX-03.wav'},
        {id: 'sfx2', letter: 'R', src: 'https://drumsoundz.com/SFX-04.wav'},
        {id: 'sfx3', letter: 'T', src: 'https://drumsoundz.com/Tom%20H.wav'},
        {id: 'sfx4', letter: 'G', src: 'https://drumsoundz.com/Tom%20L.wav'}
    ];

    return (
        <div className="pad-wrapper">
            <button className="drum-pad" id="snare">Q
                <audio controls src="Kick1.wav" type="audio/wav" id="Q" className="clip">
                </audio>
            </button>
            <button className="drum-pad" id="snare1"><audio src="" className="clip" id="W"></audio>W</button>
            <button className="drum-pad" id="bass1"><audio src="" className="clip" id="E"></audio>E</button>
            <button className="drum-pad" id="bass2"><audio src="" className="clip" id="A"></audio>A</button>
            <button className="drum-pad" id="drum0"><audio src="" className="clip" id="S"></audio>S</button>
            <button className="drum-pad" id="drum1"><audio src="" className="clip" id="D"></audio>D</button>
            <button className="drum-pad" id="drum2"><audio src="" className="clip" id="Z"></audio>Z</button>
            <button className="drum-pad" id="drum3"><audio src="" className="clip" id="X"></audio>X</button>
            <button className="drum-pad" id="drum4"><audio src="" className="clip" id="C"></audio>C</button>
        </div>
    )
}

export default DrumPads;