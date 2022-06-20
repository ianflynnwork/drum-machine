function DrumPads() {

    return (
        <div className="pad-wrapper">
            <button className="drum-pad" id="snare"><audio src="" className="clip" id="Q"></audio>Q</button>
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