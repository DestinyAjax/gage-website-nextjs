import React, { Component } from 'react'
import Auth from '../components/Auth'

class Signin extends Component {
    render() {
        return (
            <div>
                <Auth>
                    <div id="signup-page">
                        <div className="row contain">
                            <div className="col-md-4 form">
                                <div className="form-content">
                                    <p className="text-center">
                                        <a href="/"><img src="/static/images/gage-logo.png" /></a>
                                    </p>
                                    <p className="text-center">Login with you email and password</p>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary form-control">Sign In</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 background">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Its good<br/> to have you <br/>back</h1>
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

export default Signin;