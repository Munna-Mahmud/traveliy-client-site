import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { singInWithGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })

    }
    return (
        <div id="login" className=" mt-5" >

            <section className="vh-100 bg-image" style={{ backgroundImage: " url('https://mdbootstrap.com/img/Photos/new-templates/search-box/img4.jpg')" }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Please LogIn</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example4cg">Password</label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">LogIn</button>
                                            </div>

                                            <button type="button" onClick={handleGoogleLogin} className="btn btn-primary ms-2 mt-2 btn-m"> <i className="fab fa-google"></i> Sign up With Google</button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;