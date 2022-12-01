import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmailPasswordSignIn.css';
import app from './../../firebase.init';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const auth = getAuth(app);

const EmailPasswordSignIn = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        setUserEmail(email);
        const password = form.password.value;
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                form.reset();
                console.log(user)
            })
            .catch((error) => {
                console.error(error.message);
                setError(error.message)
            });
    }

    const handleSignOut = (e) => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setUser({});
            });
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address');
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email is sent. Please check your email')
            })
            .catch((error) => {
                console.error(error.message);
            });

    }
    return (
        <div className="form-container">
            {/* User Information  */}
            {user.uid &&
                <div className="user-info">
                    < h2 className="user-name"> User Name: {user.displayName}</ h2>
                    <button className="sign-out-button" onClick={handleSignOut} >Sign Out</button>
                </div>
            }
            <h1 className="title">Please login</h1>
            <div className="form">
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" placeholder='Enter your email address' required />
                        <label htmlFor="password">Your password</label>
                        <input type="password" name="password" placeholder="Enter your password" required />
                        {user.uid && <h2 className="success-message">User Login Successfully.</h2>
                        }
                        <h2 className="error-message">{error}</h2>
                        <button className="submit-btn" type="submit">Sign In</button>
                        <h2>Don't have an account ? <Link to='/signUp'>Sign up</Link></h2>
                        <h3>Forget password? <button className="reset-btn" onClick={handleForgetPassword} type="button">please reset</button></h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailPasswordSignIn;