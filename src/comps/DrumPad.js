import { useEffect } from "react";

function DrumPad({ pad, setSoundText, volumeLevel }) { 
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        };
    }, []);
    const playSound = () => {
        const audioTag = document.getElementById(pad.letter);
        audioTag.volume = volumeLevel;
        audioTag.play();
        setSoundText(pad.id)
    }
    const handleKeyPress = (e) => {
        if(e.keyCode === pad.keyCode){
            playSound();
        }
    }
    

    return (
        <div 
        className="drum-pad" 
        id={pad.id}
        onClick={playSound}
        >
        
            <p>{pad.letter}</p>
            <audio 
                src={pad.src} 
                className="clip" 
                id={pad.letter}>
            </audio>
        </div>
    )
}

export default DrumPad;