import Link from 'next/link'

const FooterLink = () => (
    <div id="footer">
        <div className="container-fluid">
            <div className="row first">
                <div className="col-md-3 col-xs-12 col-sm-12">
                    <img className="logo" src="/static/images/gage-logo.png" />
                </div>
                <div className="col-md-2 col-xs-12 col-sm-12">
                    <h3>About</h3>
                    <p>
                        <a href="/company">Company</a><br/>
                        <a href="/">Career</a><br/>
                    </p>
                </div>
                <div className="col-md-2 col-xs-12 col-sm-12">
                    <h3>Learn</h3>
                    <p>
                        <a href="/remind-me">Blog</a><br/>
                        <a href="/rem-id">Annual Report</a><br/>
                        <a href="/rem-tracka">Impact Report</a><br/>
                    </p>
                </div>
                <div className="col-md-2 col-xs-12 col-sm-12">
                    <h3>Government</h3>
                    <p>
                        <a href="/company">Why Gage</a><br/> 
                        <a href="/career">Pricing</a><br/>
                        <a href="/signin">Sign In</a><br/>
                        <a href="/signup">Sign Up</a><br/>
                    </p>
                </div>
                <div className="col-md-3 col-xs-12 col-sm-12">
                    <h3>Support</h3>
                    <p>
                        <a href="/contact-us">Contact Us</a><br/>
                    </p>
                </div>
            </div>
        </div>
        <style jsx>{`
            #footer {
                padding: 50px;
            }

             #footer .logo {
                width: 120px;
                text-align:center;
                padding-top: 30px;
            }
            
            #footer .first {
                margin-bottom: 40px;
            }
            
            #footer h3 {
                font-style: normal;
                line-height: 27px;
                font-size: 17px;
                color: #06C2CE;
                margin-bottom: 10px;
            }
            
            #footer p {
                font-size: 16px;
            }
            
            #footer a {
                color: #223D68;
                font-size: 15px;
            }
            
            #footer a:hover {
                text-decoration: none;
                color: #06C2CE;
            }
        `}</style>
    </div>
);

export default FooterLink;