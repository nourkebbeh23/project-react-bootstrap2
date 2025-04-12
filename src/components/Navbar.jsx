import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
<div className="  container-fluid ">
<div className=" row justify-content-center">
<h3 className="bg p-2 text-center text-white">
Valentine’s Day Promotions Shop Now

</h3>
</div>
</div>

<nav class="navbar navbar-expand-lg nn  ">
        <div class="container">
          <a href="index.html" class="navbar-brand color ps-3 pe-3" >
     <strong>C</strong>
          </a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5  " id="navbar-content">
       <div className="ms-5">


     
                  <ul class="navbar-nav ms-5   ">
                    <li class="nav-item m-1">
                      <Link class="nav-link" to="/">
                        Home
                      </Link>{" "}
                    </li>
                    <li class="nav-item  m-1">
                      <Link class="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li class="nav-item  m-1">
                    <Link class="nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li class="nav-item  m-1">
                      <Link class="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
             
                  </ul>
                  </div>
            <div class="ms-auto  d-grid d-md-blok gap-2 mb-2 mb-md-0">
              <button
                href="#"
                class=" btn-sm btn  p-2  algin-item-center d-inline-flex text-center justify-content-center"
              >
                cart
              </button>
            </div>
          </div>
        </div>
       \
      </nav>
</div>
 

  );
};

export default Navbar;
