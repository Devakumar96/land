import axios from 'axios';

const Form = () => {

  const submitHandler = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const designation = event.target.designation.value;
    const contact = event.target.contact.value;
    const data = {name,email,designation,contact};

    axios.post("https://jsonplaceholder.typicode.com/posts",data)
    .then((response) => {
      console.log(response);
      event.target.reset();
    })
    .catch((error) =>{
      console.log(error)
    })

  }

 

  return (
    <div className='container-fluid form'>
        
        <h2 className='text-center text-white p-5 fs-2 fw-bold text-decoration-underline'>Form Page</h2>
        

        <form className='form text-center p-5' onSubmit={submitHandler}>

        <div className='row '>
            <div className='col text-center '>
            <label htmlFor="Name" className='text-white float-sm-start'>Name</label>
            <input type="text" className="form-control p-3 " id='name' name='name' placeholder="Name"/>
            </div>
            <div className="col  ">
            <label htmlFor="Email" className='text-white float-sm-start'>Email</label>
            <input type="text" className="form-control p-3 " id='email' name='email'  placeholder="Email"/>
            </div>
        </div>

        <div className='row '>
            <div className='col mt-3'>
            <label htmlFor="Designation" className='text-white float-sm-start'>Designation</label>
            <input type="text" className="form-control p-3" name='designation'   placeholder="Designation"/>
            </div>
            <div className="col mt-3 ">
            <label htmlFor="Contact" className='text-white float-sm-start'>contact</label>
            <input type="text" className="form-control p-3 " name='contact'   placeholder="Contact"/>
            </div>
        </div>
       
        <button type="submit" className="btn btn-primary  mt-5 py-2 px-5">Submit  Button</button>
        </form>
    </div>
  )
}

export default Form