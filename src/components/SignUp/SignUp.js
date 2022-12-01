import './SignUp.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from './../../firebase.init';

const auth = getAuth(app);

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = e.target.password.value;
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setSuccess(true);
                updateUser(name);
                emailVerification();
            })
            .catch((error) => {
                console.error(error.message);
                setError(error.message);
            });
    }

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((error) => {
            console.error(error.message)
        });
    }

    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email and verify')
            });
    }


    return (
        <div className="form-container">
            <h1 className="title">Please Sign Up</h1>
            <div className="form">
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" placeholder='Enter your Name ' required />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" placeholder='Enter your email address' required />
                        <label htmlFor="password">Your password</label>
                        <input type="password" name="password" placeholder="Enter your password" required />
                        {success && <h2 className="success-message">User Created Successfully.</h2>
                        }
                        <h2 className="error-message">{error}</h2>
                        <button className="submit-btn" type="submit">Sign Up</button>
                        <h2>have an account ? <Link to='/signInWithEmailPassword'>Login</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;