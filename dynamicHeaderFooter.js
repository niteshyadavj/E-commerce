// header
const header=document.getElementById('header');
header.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a href="index.html" class="navbar-brand" id="logo">
      Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false"  aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar1" >
      <form class="d-flex mx-auto">
        <input type="search" name="search" id="search" class="form-control" placeholder="Search" aria-label="Search">
        <button class="btn btn-success " type="submit"> Search</button>


      </form>
      <ul class="navbar-nav ms-auto">
        <li> 
          <a class="btn btn-primary" id="login" href="login.html">Login </a>
        </li>
        <li  class="nav-item">
          <a class="nav-link" href="cart.html">
            <i class="fa fa-shopping-cart"></i>
          </a>
         
        </li>
      </ul>
      
    </div>


  </div>
</nav>


<!-- navbar second -->
<nav class="navbar navbar-expand-sm navbar-light bg-light py-0 ">
  
  <div class="container-fluid ">
    <!-- <div class="collapse navbar-collapse " id="navbar1">  -->
      <ul class="nav justify-content-center mx-auto  ">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="allProduct.html">All Products</a>
        </li>
       
   
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="menAll.html">Men All</a></li>
            <li><a class="dropdown-item" href="menShirts.html">Shirts</a></li>
            <li><a class="dropdown-item" href="menHoodie.html">Hoodies</a></li>
            <li><a class="dropdown-item" href="menPants.html">Pants</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="womenAll.html">Women All</a></li>
            <li><a class="dropdown-item" href="womenDress.html">Dress</a></li>
            <li><a class="dropdown-item" href="womenPants.html">Pants</a></li>
            <li><a class="dropdown-item" href="womenSkirts.html">Skirts</a></li>
          </ul>
        </li>



        <li class="nav-item">
          <a class="nav-link" href="kids.html">Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>

     </div>
  </div> 


</nav>
<!-- navbar end -->


`

// footer

const footer=document.getElementById('footer');
footer.innerHTML=` <div class="container-fluid align-content-center bg-black p-3">
<div class="row mx-auto">
  <div class="col-md-3">
    <nav class="nav navbar-nav  navbar-dark  text-center">
      <ul class="nav-item">
          <a class="navbar-brand nav-item nav-link" href='womenAll.html'>Women</a>
          <a class="nav-item nav-link" href='womenDress.html'>Dresses</a>
          <a class="nav-item nav-link" href='woemenPants.html'>Pants</a>
          <a class="nav-item nav-link" href='womenSkirts.html'>Skirts</a>
       </ul>
       
     </nav>
  </div>
  <div class="col-md-3">
    <nav class="nav navbar-nav   navbar-dark  text-center">
      <ul class="nav-item">
          <a class="navbar-brand nav-item nav-link" href='menAll.html'>Men</a>
          <a class="nav-item nav-link" href='menShirts.html'>Shirts</a>
          <a class="nav-item nav-link" href='menPants.html'>Pants </a>
          <a class="nav-item nav-link" href='menHoodie.html'>Hoodies</a>
       </ul>
       
     </nav>
  </div>
  <div class="col-md-3">
    <nav class="nav navbar-nav  navbar-dark  text-center">
      <ul class="nav-item">
          <a class="navbar-brand nav-item nav-link" href='kids.html'>Kids</a>
          
       </ul>
       
     </nav>
    
  </div>
 
  <div class="col-md-3">
    <nav class="nav navbar-nav  bg-black navbar-dark  text-center">
     <ul class="nav-item">
         <a class="navbar-brand nav-item nav-link" href='index.html'>Home</a>
         <a class="nav-item nav-link" href='login.html'>Login</a>
         <a class="nav-item nav-link" href='contact.html'>Contact us</a>
         <a class="nav-item nav-link" href='cart.html'>Cart </a>
      </ul>
      
    </nav>
    
  </div>
</div>
<hr style="color: white;">
<p class="text-center text-light  pb-3">Copyright &copy; Ecommerce 2023</p>
</div>`