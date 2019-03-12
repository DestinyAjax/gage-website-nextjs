import React, { Component } from 'react'
import Auth from '../components/Auth'

class Signup extends Component {
    
    render() {
        return (
            <div>
                <Auth>
                <div id="signup-page">
                    <div className="row">
                        <div className="col-md-4 form">
                            <div className="form-content">
                                <p className="text-center">
                                    <a href="/"><img src="/static/images/gage-logo.png" /></a>
                                </p>
                                <p className="text-center">Enter your credentials to start making difference in govgage</p>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Email" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary form-control">Let's go</button>
                                </div>
                                <div className="form-group">
                                    <label><input type="checkbox"/> I agree to Govgage’s Terms of Service & Privacy Policy </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 background">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>“The greatest revolutions began with a desire<br/>
                                    to not be afraid and but to face the problems.<br/>
                                    Not just to wallow and complain about it” <br/><br/>-Anonymous</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Auth>
            </div>
        );
    }
}

export default Signup;