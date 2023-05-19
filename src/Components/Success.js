import '../App.css'

const Success=({func,formHideFunc})=>{
    const handleClick=()=>{
    func(false)
    formHideFunc(true)
    }
    return (
        <div id="success">
            THANK YOU FOR YOU RESPONSE
            <button id="btn" onClick={handleClick}>Back</button>
        </div>
    )
}
export default Success;