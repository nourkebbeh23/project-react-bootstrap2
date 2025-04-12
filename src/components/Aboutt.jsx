
import img from "../assets/image1.jpg"

function Aboutt() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center color-1 mt-5">
          About <strong>COTTON</strong>
        </h1>
        <div className="col-md-5 mt-5 ">

        <p className="mt-5">Delivering Fresh Flowers Since 2035</p>
          <p className="mt-5">
            I'm a paragraph. Click here to add your own
            br text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <p className="mt-3">
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide.
          </p>
          <a href="#" className="btnn  ">contact us</a>
        </div>
     
        <div className="col-md-5 mt-5">
<a href="#">
    <img className="img-fluid mt-3" src={img} alt="" />
</a>
        </div>
      </div>
    </div>
  );
}
export default Aboutt;
