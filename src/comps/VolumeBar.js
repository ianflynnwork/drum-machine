

function VolumeBar({ setSoundText }) {
   
    return (
        <div className="slide-container">
            Volume
            <input id="myRange" type="range" min='1' max='100' value='50' className="slider"/>
        </div>
    )
}

export default VolumeBar;