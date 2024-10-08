import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './CreateAccountPage.css';

function CreateAccountPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try{
            if (password !== confirmPassword ) {
                setError("Passwords don't match")
                return;
        }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/events')
        }
        catch (e) {
            setError(e.message);
        }
    }

    return(
        <div className="createContainer">
            <div className="box">
                <h1>Create an Account</h1>
                {error && <p className="error">{error}</p>}
                <input 
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}  /> 
                <input 
                    placeholder="Your password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} /> 
                <input 
                    placeholder="Confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)} /> 

                <button onClick={createAccount}>Create Account</button>
                <Link to='/login'>Already have an account? Log in here</Link>
            </div>
        </div>
    )
}

export default CreateAccountPage;