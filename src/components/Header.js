import React from 'react'

const Header = () => {
  return (
    <div className='container-fluid bg-light'>
        <h2 className='text-center pt-5 fs-1 fw-bold'>Find the perfect plan for your bussiness.</h2>


        <div className="row row-cols-1 row-cols-md-3 g-5 p-5 ">
  <div className="col">
    <div className="card h-auto shadow-sm border-0">
      
      <div className="card-body">
        <p className='text-muted'>Free Forever</p>
        <h5 className="card-title fs-1 fw-bold">Free</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in.
        </p>
        <ul>
            <li>small list conent</li>
            <li>small list conent</li>
            <li>small list conent</li>
        </ul>
        <a href="https://saasmantra.com/" className="btn m-2 text-dark p-2">Sign Up For Free</a>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-auto shadow-sm border-0">

    <div className="card-body">
        <p className='text-muted'>For Teams</p>
        <h5 className="card-title fs-1 fw-bold">$20<span> <small className='text-muted fs-6'>/MO</small></span></h5> 
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in.
        </p>
        <ul>
            <li>small list conent</li>
            <li>small list conent</li>
            <li>small list conent</li>
        </ul>
        <a href="https://saasmantra.com/" className="btn m-2 text-dark p-2">Start 14 days trail</a>
      </div>

    </div>
  </div>
  <div className="col">
    <div className="card h-auto shadow-sm border-0">

    <div className="card-body last">
        <p className='text-muted'>For enterprises</p>
        <h5 className="card-title fs-1 fw-bold">$140<span> <small className='text-muted fs-6'>/MO</small></span></h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in.
        </p>
        <ul>
            <li>small list conent</li>
            <li>small list conent</li>
            <li>small list conent</li>
        </ul>
        <a href="https://saasmantra.com/" className="btn m-2 text-dark bg-primary p-2">Start 14 days trail</a>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default Header