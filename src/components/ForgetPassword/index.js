import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const ForgetPassword = () => {

    const handleSubmit = () => {

        }

    const [email, setEmail] = useState('');

    

    const handleEmail = e => {
            setEmail(e.target.value);
        }


    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                    
                    <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                         
                            <div className="inputBox">
                                <input onChange={handleEmail} value={email} type="mail" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>

                            </div>
                            
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit ? Connectez vous</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default ForgetPassword