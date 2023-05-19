import "./Form.css";
import { useState ,useEffect} from "react";
const Form = ({func,formHideFunc}) => {
  const [message, setMessage] = useState({});
  const [color, setColor] = useState({});
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactnumber: '',
  });
  useEffect(()=>{
  
  },[message,color,data])
  const ValidationPart = {
    firstname: /[a-zA-Z]{5,12}$/i,
    lastname: /[a-zA-Z]{5,12}$/i,
    email: /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
    contactnumber:/[0-9]{10}$/,
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    e.preventDefault();
    let error={};
    let effect={}
    //first name
    if(!data.firstname){
       error.firstname="*Firstname required"
       effect.firstname="red"
    }
    else if(ValidationPart.firstname.test(data.firstname)){
       error.firstname="✓ correct"
       effect.firstname="green"
    }else{
      error.firstname="✕ Invalid Inputs"
      effect.firstname="red"
    }
    //last name
    if(!data.lastname){
       error.lastname="*Lastname required"
       effect.lastname="red"
    }
    else if(ValidationPart.lastname.test(data.lastname)){
       error.lastname="✓ correct"
       effect.lastname="green"
    }else{
      error.lastname="✕ Invalid Inputs"
      effect.lastname="red"
    }
    //email
    if(!data.email){
       error.email="*Email required"
       effect.email="red"
    }
    else if(ValidationPart.email.test(data.email)){
       error.email="✓ correct"
       effect.email="green"
    }else{
      error.email="✕ Invalid Inputs"
      effect.email="red"
    }
    //contact
    if(ValidationPart.contactnumber.test(data.contactnumber)){
       error.contactnumber="✓ correct"
       effect.contactnumber="green"
    }
    else if(!data.contactnumber){
       error.contactnumber="*contact required"
       effect.contactnumber="red"
    }
    else if(data.contactnumber.length<9){
      error.contactnumber="✕ required 10 digits"
      effect.contactnumber="red"
    }
    if (Object.keys(error).length > 0) {
      setMessage(error);
      setColor(effect);
      return;
    }
  };
  const handleClick=()=>{
    if((message.firstname && message.lastname && message.email && message.contactnumber)==="✓ correct"){
      func(true)
      formHideFunc(false)
    }
  }
  return (
    <div id="form-container">
      <div id="head-form">Connect with us</div>
      <div id="sub-head-form">for outstanding protective overlaminates</div>

      <form id="form" action="" method="post">
        <div id="grid">
        <div className="lname">
          First Name
          {<span className="error" style={{color:`${color.firstname}`}}> { message.firstname}</span>}
          <br />
          <input type="text" name="firstname" value={data.firstname} onChange={handleChange} required />
        </div>
        <div className="lname">
          Last Name
          {<span className="error" style={{color:`${color.lastname}`}}> { message.lastname}</span>}
          <br />
          <input type="text" name="lastname" value={data.lastname} onChange={handleChange} required />
        </div>

        <div className="lname">
          Email
          {<span className="error" style={{color:`${color.email}`}}> { message.email}</span>}
          <br />
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
        </div>
        <div className="lname">
          Contact Number
          {<span className="error" style={{color:`${color.contactnumber}`}}> { message.contactnumber}</span>}
          <br />
          <input type="number" name="contactnumber" value={data.contactnumber} onChange={handleChange} required />
        </div>

        <div className="lname">
          Company
          <br />
          <input type="text" name="company" onChange={handleChange} required />
        </div>
        <div className="lname">
          State
          <br />
          <select required onChange={handleChange}>
            <option name="state" value={1}>California</option>
            <option name="state"  value={2}>California</option>
            <option name="state"  value={3}>California</option>
            <option name="state"  value={4}>California</option>
          </select >
        </div>
        </div>
        <div className="center-name">How would you describe yourself?</div>
        <input className="input-field" type="text" name="describe-yourself" />
        <div>Preferred Distributor:</div>
        <input className="input-field"type="text" name="message" />
        <div>Additional Information
            <br/>
            <textarea></textarea>
        </div>
        
        <div id="checkbox-form">
          <input type="checkbox" required />
          <span>
            I'd like to receive promotions, product information and service
            offers from Avery Dennison.
          </span>
        </div>
        <button id="form-btn" type="submit" onClick={handleClick}>
          Submit →
        </button>
      </form>
    </div>
  );
};
export default Form;
