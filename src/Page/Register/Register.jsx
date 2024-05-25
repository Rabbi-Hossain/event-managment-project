import { useContext, useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import { IoLockClosedSharp } from "react-icons/io5";
import { FaLockOpen } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const { createUser, googleLogin } = useContext(UserContext)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false);


    const GoogleHandler =()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const accepts = e.target.terms.checked
        console.log(name, photo, email, password,accepts);

        setError('')


        if (password.length < 6) {
            setError('is less than 6 characters')
            return
        } else if (!/[A-Z]/.test(password)) {
            setError('do not have a capital letter')
            return
        } else if (!/[!@#$%^&*()]/.test(password)) {
            setError('do not have a special character')
            return
        }else if(!accepts){
            setError('please accepts our terms and condition')
            return
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("Register successfully!", "You clicked the button!", "success");
            })
            .catch(error => {
                setError(error.message)

            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex input input-bordered w-full">
                                    <input type={show ? "text" : "password"}

                                        name="password" placeholder="password" required />

                                    <span onClick={() => setShow(!show)} className="mt-2 text-3xl ">{
                                        show ? <FaLockOpen /> : <IoLockClosedSharp />
                                    }</span>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>



                            <div>
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-3" htmlFor="terms">Accepts our Terms and condition</label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>Have an account ? <Link to={'/login'} className="text-blue-800">Login</Link></p>

                            <p className="mt-2">
                                {
                                    error && <p className="text-red-500">{error}</p>
                                }
                            </p>

                            <button className="btn btn-outline text-4xl" onClick={GoogleHandler}><FcGoogle /></button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;