import { Link, useNavigate } from 'react-router-dom';
import img from '../../../public/login/login.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
            // create user
            createUser(email, password)
                .then(() => {
                    swal("Success!", "Registration Successfully!", "success");
                    navigate("/login");

                    updateProfile(name, photo)
                        .then(() => {
                            console.log("Profile Updated");
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })

        } else {
            swal(
                "Error",
                "Your Password Must Be 6 character or longer and have atleast a upercase and a spacial character and a  numeric character",
                "error"
            );
            return;
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 p-10 mr-16">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='image' placeholder="photo" className="input input-bordered" required />
                        </div>
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
                            <input className="btn bg-orange-600 text-white" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className=' my-4 text-center'>Already have an account <Link className='text-orange-600 font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;