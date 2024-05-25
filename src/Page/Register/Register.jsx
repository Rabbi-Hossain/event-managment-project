import { useContext, useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const Register = () => {

    const {createUser} = useContext(UserContext)
    const [error, setError] = useState('')

 

    const handleRegister = e=>{
        e.preventDefault()
                
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,photo,email,password);
    
        setError('')
    

        if(password.length < 6){
            setError('is less than 6 characters')
            return
        }else if(!/[A-Z]/.test(password)){
            setError('do not have a capital letter')
            return
        }


        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            swal("Register successfully!", "You clicked the button!", "success");
        })
        .catch(error=>{
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
                                <input type="text"  name="name" placeholder="Name" className="input input-bordered" required />
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <p>
                                {
                                    error && <p className="text-red-500">{error}</p>
                                }
                            </p>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>Have an account ? <Link to={'/login'} className="text-blue-800">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;