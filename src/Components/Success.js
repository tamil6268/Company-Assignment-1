import '../App.css'

const Success=({func})=>{
    return (
        <div id="success">
            THANK YOU FOR YOU RESPONSE
            <button id="btn" onClick={()=>func(false)}>Cancel</button>
        </div>
    )
}
export default Success;