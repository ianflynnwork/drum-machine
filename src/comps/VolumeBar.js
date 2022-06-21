

function VolumeBar({ setSoundText, volumeLevel, setVolumeLevel }) {
    const volumeChanger = () => {
        
    }
    return (
        <div className="slide-container">
            Volume
            <input 
                id="myRange"
                type="range"
                min='0'
                max='1'
                step= '0.01'
                value={ volumeLevel }
                onChange={ volumeChanger }
                className="slider"
            />
        </div>
    )
}

export default VolumeBar;