import image11 from "../assets/image11.avif"
import image12 from "../assets/image12.avif"
import image13 from "../assets/image13.avif"

function Homeshop(){
    return(
        <div className="container">
<div className="row justify-content-center">
<h1 className="text-center color-1 mt-5">
          Shop <strong>Flowers</strong>
        </h1>
<div className="col-md-4 mt-5 text-center ">
<img src={image11} className="img-fluid" alt="" />
<div className="mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image12} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image13} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p>
    $75 
</p>
</div>
</div>

<div className="mt-5 text-center">
<a href="#" className=" btnnT  mt-5   ">Shop all</a>

</div>

</div>



            
        </div>
    );
}
export default Homeshop;