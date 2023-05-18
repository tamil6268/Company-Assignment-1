import "./Form.css";
import { useState } from "react";
const Form = ({func,formHideFunc}) => {
  const [message, setMessage] = useState({});
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactnumber: '',
    company:'',
    distributor:''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const errors = {};
    if (!data.firstname) {
      errors.firstname = 'firstName is required';
    }
    if (!data.lastname) {
      errors.lastname = 'lastName is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if (!data.contactnumber) {
      errors.contactnumber = 'contact is required';
    }
    if (!data.company) {
      errors.company = 'company is required';
    }
    if (Object.keys(errors).length > 0) {
        setMessage(errors);
        if(Object.keys(message).length > 0){
          func(true)
          // formHideFunc()
        }else{
          func(false)
        }
        return;
    }
   
  };
  return (
    <div id="form-container">
      <div id="head-form">Connect with us</div>
      <div id="sub-head-form">for outstanding protective overlaminates</div>

      <form id="form" action="" method="post">
        <div id="grid">
        <div className="lname">
          First Name
          {<span className="error" style={{color:"red"}}> { message.firstname}</span>}
          <br />
          <input type="text" name="firstname" value={data.firstname} onChange={handleChange} required />
        </div>
        <div className="lname">
          Last Name
          {<span className="error" style={{color:"red"}}> { message.lastname}</span>}
          <br />
          <input type="text" name="lastname" value={data.lastname} onChange={handleChange} required />
        </div>

        <div className="lname">
          Email
          {<span className="error" style={{color:"red"}}> { message.email}</span>}
          <br />
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
        </div>
        <div className="lname">
          Contact Number
          {<span className="error" style={{color:"red"}}> { message.contactnumber}</span>}
          <br />
          <input type="number" name="contactnumber" value={data.contactnumber} onChange={handleChange} required />
        </div>

        <div className="lname">
          Company
        {<span className="error" style={{color:"red"}}> { message.company}</span>}
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
        <button id="form-btn"value="submit" onClick={handleClick}>
          Submit →
        </button>
      </form>
    </div>
  );
};
export default Form;
