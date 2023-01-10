import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://saasmantra.com/">
   <img alt='saas-logo' className='logo-saas' src="https://saasmantra.com/images/saasmantra-logo.png"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="https://saasmantra.com/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://saasmantra.com/">Pricing</a>
        </li>

        
        <li className="nav-item">
          <a href="https://saasmantra.com/" className="nav-link">About</a>
        </li>
      </ul>
      <form className="d-flex " role="search">
      <button className="btn border-0 m-2  text-dark" type="submit">Log In</button>
        <button className="btn m-2 bg text-dark" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar