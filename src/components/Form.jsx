import image18 from "../assets/image18.avif"

function Form (){
    return(
<div className="container">
<div className="row justify-content-center">
<h1 className="text-center color-1 mt-5">
          Contact <strong>Us</strong>
        </h1>
<div className="col-md-5 mt-5">
    <p className="mt-5 text-center">
    We’re Here for Any Question</p>
<form action="" className="mt-5" >
<div className="for mt-5">


<div className="vv m-3 ">
<label htmlFor="">First Name*</label> <br />
<input type="text" name="" id="" />



</div>
<div className="vv m-3">
<label htmlFor="">Last Name*</label>  <br />
<input type="text" name="" id="" />

</div>
</div>

<div className="for">


<div className="vv m-3 ">
<label htmlFor="">Email*</label> <br />
<input type="email" name="" id="" />



</div>
<div className="vv m-3">
<label htmlFor="">Subject*</label>  <br />
<input type="text" name="" id="" />

</div>

</div>

<div className="vv m-3 ">
<label htmlFor="">Leave us a message....</label> <br />
<textarea name="" id="" cols="55" rows="3"></textarea>



</div>







</form>
<div className="text-center">
<button type="submit" href="#" className="add btn ">submit</button>
</div>
<div className="for mt-5 ">
    <p className="text-center ms-5 ">Address <br />
500 Terry Francine St. <br />
SF, CA 94158</p>
<p className="text-center ms-5 ">
Info <br />
123-456-7890
<br />
info@mysite.com
</p>
</div>
</div>
<div className="col-md-5 mt-5">
<a href="#"><img src={image18} className="img-fluid" alt="" /></a>
</div>

</div>
</div>
    );


}

export default Form;