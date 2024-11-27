import React, { useState } from 'react'

function Color() {
    const [item, setItem] = useState('');
    const [toggle,setToggle] = useState(false)
    const handleColor = () => {
        setToggle(true); 
    };


    return (
        <>
            <div>Color</div>
            <input type='text' placeholder='enter name' onChange={(e) => setItem(e.target.value)}></input>
            <h1 style={{ color: toggle ? 'red' : 'black' }}>
                {item}
                <button onClick={handleColor}>Click</button>
            </h1>


        </>

    )
}

export default Color