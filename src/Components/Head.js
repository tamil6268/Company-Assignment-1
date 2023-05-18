import "./Head.css";
import img1 from "./Assets/Group 194.svg";
import img2 from "./Assets/Group 195.svg";
import img3 from "./Assets/Asset 2ne.svg";
import Form from './Form';
import Success from './Success';
import {useEffect,useState} from 'react';

function Head() {
  const [state,setState] =useState(true)
  const [sucess,setSucess] =useState(false)
  // useEffect(()=>{
  //    setTimeout(()=>{
  //      setState(true)
  //    },4000)
  // },[])
  function formHide(){
    setState(false)
  }
  return (
    <div id="container-1">
      <div id="Head-icon"></div>
      <div id="Head-content">
        Take your graphics protection to the next level with DOL Max
        overlaminates
      </div>
      <div id="Head-Mini-content">
        Pair with MPI 1105 wrapping film for ramped up protection
      </div>
      <div id="box">
        <div id="one-fig">
          <img src={img1} id="img1" alt="404-Error" />
          <div className="fig-head1">Maximum Durability</div>
        </div>
        <div id="two-fig">
          <img src={img2} id="img2" alt="404-Error" />
          <div className="fig-head2">Enhanced Appearance</div>
        </div>
        <div id="three-fig">
          <img src={img3} id="img3" alt="404-Error" />
          <div className="fig-head3">High Gloss Finish</div>
        </div>
      </div>
      {state && <Form func={setSucess} formHideFunc={formHide}/>}
      {sucess && <Success func={setSucess}/> }
    </div>
  );
}
export default Head;
