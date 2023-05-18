import './Inquire.css';

const Inquire=()=>{
    const handleClick=()=>{
        window.scrollTo({top:0,right:0})
    }
    return (
        <div id="container-2">
           <div id="media-fix"><div id="title-inquire">DOL Max Overlaminate Films</div>
           <div id="sub-para-inquire">Printed graphics deserve maximum protection, DOL Max is the solution.</div>
           <div id="sub-title-inquire">Features & Benefits:</div>
           <ul id="li-box-inquire">
            <li id="li-one">Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
            <li id="li-two">The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
            <li id="li-three">Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
           </ul>
           <button id="btn-inquire" onClick={handleClick}>Inquire now → </button></div>
        </div>
    )
}
export default Inquire;