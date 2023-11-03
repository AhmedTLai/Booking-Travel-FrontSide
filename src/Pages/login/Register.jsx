import './login.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="container my-5  py-5">
        <div className="d-flex gap-3 my-5">
        <aside className="flex1">
            <img src="/images/register.png" alt="RegisterPic" className="w-100"/>
        </aside>

        <form className="py-3 bg position-relative text-white flex1 px-3 form">

        <div className="avatar w-100 h-100  rounded-circle overflow-hidden border py-3 px-3 position-absolute bg-white">
            <i className="fa-regular fa-user w-100 h-100 fs-1 d-flex align-items-center justify-content-center" ></i>
        </div>

        <br />
        <br />
        <h1 className='text-center text-white'>Register</h1>
        <br />
        <input type="text" name='fullname' placeholder='Enter you fullname ...' className='form-control'/>
        <br />
        <input type="email" name='email' placeholder='Enter you email ...' className='form-control'/>
        <br />
        <input type="password" name='password' placeholder='Enter you Password ...' className='form-control'/>
        <br />
        <button className='btn bg-dark text-light '>Login</button>
        <br />
        <br />
        <p className='text-white d-flex  gap-1 justify-content-center'>Already have account ? <Link className='text-dark' to='/login'>Login</Link></p>
        </form>

        </div>
    </div>
  )
}

export default Register