import react, { useState } from 'react';
function colourPicker(){
    const [colour,setcolour] = useState("ffffff");
    
    function handlecolourchange(event){
        setcolour(event.target.value);
    }
    return(
        <>
    <div className="colour-container">
        <h1>Colour Picker</h1>
        <div className='colour-display' style ={{backgroundColor:colour}}>
            <p>Selected colour:{colour}</p>
        </div>
        <label >Select a Colour</label>
        <input type="color" value ={colour} onChange={handlecolourchange} />
    </div>
        </>
    )
}

export default colourPicker;