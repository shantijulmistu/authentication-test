import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main';
import GithubSignIn from './components/GithubSignIn/GithubSignIn';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';
import EmailPasswordSignIn from './components/EmailPasswordSignIn/EmailPasswordSignIn';
import FacebookSignIn from './components/FacebookSignIn/FacebookSignIn';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <EmailPasswordSignIn></EmailPasswordSignIn>
        },
        {
          path: '/signInWithGoogle',
          element: <GoogleSignIn></GoogleSignIn>
        },
        {
          path: '/signInWithGitHub',
          element: <GithubSignIn></GithubSignIn>
        },
        {
          path: '/signInWithEmailPassword',
          element: <EmailPasswordSignIn></EmailPasswordSignIn>
        },
        {
          path: '/signInWithFacebook',
          element: <FacebookSignIn></FacebookSignIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
