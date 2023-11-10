import { Link } from 'react-router-dom';
import img from '../../../public/login/login.png'
import swal from 'sweetalert';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';



const Login = () => {

    const {signInUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(() => {
                swal("Success!", "Login Successfully!", "success");
                // navigate(location?.state ? location.state : "/");
            })
            .catch(() => {
                swal("Error!", "Pleas check your email and password!", "error");
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 p-10 mr-16">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className=' my-4 text-center'>New to StroyStream  <Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;