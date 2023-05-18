import "./Request.css";
import img1 from "./Assets/Group 110.svg";
import img4 from "./Assets/Path 68.svg";
import img3 from "./Assets/ici-adhesives.svg";
import img2 from "./Assets/ici-online-communication.svg";
const Request = () => {
  const handleClick=()=>{
    window.scrollTo({top:0,right:0})
}
  return (
    <div id="contaier-3">
      <div id="left-side"></div>

      <div id="right-side">
      <div id="question">Why us?</div>
      <div id="parent-request">
        <img src={img1} id="img-1-request" alt="404-Error" />
        <div id="child-request1">
          <div id="title-1-request">Quality Products</div>
          <div id="subtitle-1-request">
            Our digital overlaminate films are made from the highest quality
            materials and are designed to provide superior protection and
            appearance to your digital prints.
          </div>
        </div>
      </div>
      <div id="parent-request">
        <img src={img3} id="img-2-request" alt="404-Error" />
        <div id="child-request2">
          <div id="title-2-request"> Multiple Options</div>
          <div id="subtitle-2-request">
            {" "}
            We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically
            clear, gloss finish. This allows you to choose the perfect film
            thickness level for your specific application, ensuring your
            graphics look the best and stand out from the competition.{" "}
          </div>
        </div>
      </div>
      <div id="parent-request">
        <img src={img2} id="img-3-request" alt="404-Error" />
        <div id="child-request3">
          <div id="title-3-request">Expertise and Support </div>
          <div id="subtitle-3-request">
            Our team of experts are available to provide guidance and support
            throughout the entire process, from selecting the right product for
            your needs to installation and beyond.
          </div>
        </div>
      </div>
      <div id="parent-request">
        <img src={img4} id="img-4-request" alt="404-Error" />
        <div id="child-request4">
          <div id="title-4-request"> Durability Assurance</div>
          <div id="subtitle-4-request">
            {" "}
            Trust our products with confidence, as we offer industry leading
            durability assurance for our overlaminate films.
          </div>
        </div>
      </div>
      <button className="btn-request" onClick={handleClick}>Request a callback → </button>
      </div>
    </div>
  );
};
export default Request;
