import '../App.css'

const Success=({func,formHideFunc})=>{
    const handleClick=()=>{
    func(false)
    formHideFunc(false)
    window.scrollTo({top:0,right:0})
    }
    return (
        <div id="success">
            THANK YOU FOR YOU RESPONSE
            <button id="btn" onClick={handleClick}>X</button>
        </div>
    )
}
export default Success;