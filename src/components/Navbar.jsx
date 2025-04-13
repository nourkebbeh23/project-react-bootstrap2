import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
<div className="  container ">
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
          <div class="collapse navbar-collapse   " id="navbar-content">
      


     
                  <ul class="navbar-nav   ">
                    <li class="nav-item m-1 nn ms-5">
                      <Link class="nav-link" to="/">
                        Home
                      </Link>{" "}
                    </li>
                    <li class="nav-item  m-1 nn ms-5">
                      <Link class="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li class="nav-item  m-1 nn ms-5">
                    <Link class="nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li class="nav-item  m-1 nn ms-5">
                      <Link class="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
             
                  </ul>
               
   
                  <div class="ms-auto me-1 d-grid d-md-blok gap-2 mb-2 mb-md-0">
              <a
                href="#"
                class=" btn-sm btn rounded-pill ms-5 p-2  algin-item-center d-inline-flex text-center justify-content-center"
              >
                Log In <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 640 512" fill="#79253d"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
              </a>
            </div>
            <div class="ms-auto me-1 d-grid d-md-blok gap-2 mb-2 mb-md-0">
              <button
                href="#"
                class=" btn-sm btn rounded-pill p-2 ms-5  algin-item-center d-inline-flex text-center justify-content-center"
              >
                Cart   <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512" fill="#79253d"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              </button>
            </div>
          </div>
        </div>
       
      </nav>
</div>
 

  );
};

export default Navbar;
