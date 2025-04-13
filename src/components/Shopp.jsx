import image11 from "../assets/image11.avif"
import image12 from "../assets/image12.avif"
import image13 from "../assets/image13.avif"
import image14 from "../assets/image14.avif"
import image15 from "../assets/image15.avif"
import image16 from "../assets/image16.avif"
function Shopp(){
    return(
        <div className="container">
<div className="row justify-content-center">
<h1 className="text-center color-1 mt-5">
          Shop <strong>COTTON</strong>
        </h1>
<div className="col-md-4 mt-5 text-center">
<img src={image11} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image12} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image13} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p>
    $75 
</p>
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image14} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image15} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p >
    $75 
</p>
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
<div className="col-md-4 mt-5 text-center">
<img src={image16} className="img-fluid" alt="" />
<div className=" mt-2">
<a href="#" className="text-decoration-none text-dark">i'm prodect</a> <br />
<p>
    $75 
</p> 
<button href="#" className="add btn  ">Add to cart</button>
</div>
</div>
</div>



            
        </div>
    );
}
export default Shopp;