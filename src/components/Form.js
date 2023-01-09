import React from 'react'

const Form = () => {
  return (
    <div className='container-fluid form'>
        
        <h2 className='text-center text-white p-5'> <u>Form Page</u></h2>

            

        <form className=' text-center p-5'>
        <div className='row '>
            <div className='col text-center '>
            <label for="Name" className='text-white'>Name</label>
            <input type="text" class="form-control p-3  " placeholder="Name"/>
            </div>
            <div class="col  ">
            <label for="Email" className='text-white'>Email</label>
            <input type="text" class="form-control p-3 " placeholder="Email"/>
            </div>
        </div>

        <div className='row '>
            <div className='col '>
            <label for="Designation" className='text-white'>Designation</label>
            <input type="text" class="form-control p-3  " placeholder="Designation"/>
            </div>
            <div class="col  ">
            <label for="Contact" className='text-white'>contact</label>
            <input type="text" class="form-control p-3 " placeholder="Contact"/>
            </div>
        </div>
       
        <button type="submit" class="btn btn-primary  mt-5">Submit  Button</button>
        </form>
    </div>
  )
}

export default Form