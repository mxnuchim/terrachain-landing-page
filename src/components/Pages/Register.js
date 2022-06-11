import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import axios from '../../api/axios';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/Register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    // const [user, setUser] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [showhide, setShowhide] = useState('');


    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v2 = PWD_REGEX.test(pwd);
        if (!v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ firstName, lastName, email, pwd,registrationNumber }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setfirstName('');
            setlastName('');
            setPwd('');
            setMatchPwd('');
            setRegistrationNumber('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/SignIn">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <select onChange={(e) => (handleshowhide(e))}>
                            <option selected value="Vendor">Vendor</option>
                            <option value="GovernmentAgent" >Government agent</option>
                        </select>

                        <label htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setfirstName(e.target.value)}
                            required
                        />
                        <label htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setlastName(e.target.value)}
                            required
                        />

                            <label htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            Must match the first password input field.
                        </p>
                        {
                            showhide === 'GovernmentAgent' && (
                                <div>
                                    <label htmlFor="registrationNumber">
                                        Registration Number:
                                    </label>
                                    <input style={{ visibility: false }}
                                        name="registration_number"
                                        type="text"
                                        id="registrationNumber"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setRegistrationNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                        <button disabled={!validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <Link to="/SignIn" >
                            <span className="line">
                            <a style={{color: 'black',}} href="#SignIn">Sign In</a>
                            </span>
                        </Link>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register
