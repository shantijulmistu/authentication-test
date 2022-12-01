import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to='/signInWithGoogle'>Sign in with Google</Link>
                <Link to='/signInWithGitHub'>Sign in with GitHub</Link>
                <Link to='signInWithEmailPassword'>Sign in with Email and password</Link>
                <Link to='signInWithFacebook'>Sign in with Facebook</Link>
            </nav>
        </div>
    );
};

export default Header;