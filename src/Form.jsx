import React, { useState } from 'react'

function Form() {
    const [item,setItem]=useState('')
    const [details,setDetails]=useState([])
  return (
    <>
    <div>Form</div>
    <form onSubmit={()=> alert(details)
        }>
         <input type="text" placeholder='enter username'onChange={(e)=>setDetails(e.target.value)}></input>
         <input type='email' placeholder='enter email' onChange={(e)=>setDetails(e.target.value)}></input>
         <input type="text"  placeholder='enter address' onChange={(e)=>setDetails(e.target.value)}></input>
         <button type='submit'>submit</button>
    </form>
    </>
   
  )
}
export default Form