import React, { useState } from 'react';
import { FacebookAuthProvider, getAuth, signOut } from 'firebase/auth';
import app from './../../firebase.init';
import { signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);
const FacebookSignIn = () => {
    const [user, setUser] = useState({});

    const handleFacebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)

            })
            .catch((error) => {
                console.error(error.message);
            });
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setUser({});
            });
    }
    return (
        <div>

            {/* Google sign in authentication system start here   */}
            <div className="google-sign-in">
                {/* User Information  */}
                {user.uid &&
                    < h2 className="user-name"> User Name: {user.displayName}</ h2>
                }
                <h1>Google Sign In</h1>

                <div className="btn-group">
                    {user.uid ?
                        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
                        :
                        <button onClick={handleFacebookSignIn} className="sign-in-button"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="48" height="48"
                            viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        </svg> Sign in with Facebook</button>
                    }
                </div>
            </div>
            {/* Google sign in ends here  */}
        </div>
    );
};

export default FacebookSignIn;