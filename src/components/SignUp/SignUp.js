import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import app from '../../firebase/firebase.config';

const SignUp = () => {

    const { createUser, loginWithGoogle, verifyEmail } = useContext(AuthContext)

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const auth = getAuth(app)

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user
                form.reset()
                Navigate(from, { replace: true })
                verifyEmail().then().catch(e => console.log(e.message))
                // console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        console.log(user);
                    })
                    .catch(e => {
                        console.log(e.message);
                    })
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    const LoginGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <button onClick={LoginGoogle} className='mt-4 flex justify-center btn btn-outline btn-primary'>
                        <FaGoogle className='text-2xl ml-5' />
                        <p className='text-xl'>Log In With Google</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;