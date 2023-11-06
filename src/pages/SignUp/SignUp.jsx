import { Link } from 'react-router-dom';
import img from '../../../public/login/login.svg'

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-16">
            <img src={img} alt="" />
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-orange-600 text-white" type="submit" value="Register" />
              </div>
            </form>
            <p className=' my-4 text-center'>Already have an account <Link className='text-orange-600 font-bold' to = "/login"> Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;