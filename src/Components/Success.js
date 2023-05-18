import '../App.css'
import {useState} from 'react';
const Success=({func})=>{
    const [state,setState]=useState(false)
    return (
        <div id="success">
            THANK YOU FOR YOU RESPONSE
            <button id="btn" onClick={()=>func(false)}>Cancel</button>
        </div>
    )
}
export default Success;