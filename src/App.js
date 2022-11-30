import './App.css';
import GithubSignIn from './components/GithubSignIn/GithubSignIn';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';


function App() {
  return (
    <div className="App">
      <h1 className="title">Some of Firebase Authentication</h1>
      <GoogleSignIn></GoogleSignIn>
      <GithubSignIn></GithubSignIn>
    </div>
  );
}

export default App;
