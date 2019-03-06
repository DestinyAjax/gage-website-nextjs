import Link from 'next/link'
// import '../static/css/navbar.css'

const NavBar = () => {
    return (
        <div>
        <nav id="nav" className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand"><img className="logo" src="/static/images/gage-logo.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
      
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="r-mr-nav nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="d-block d-md-none mobile-nav">
                                    <h6><a href="/company">Company</a></h6>
                                    <h6><a href="/career">Career</a></h6>
                                </div>
                                <div className="b-dropdown-menu d-none d-md-block">
                                    <h6><a href="/company">Company</a></h6>
                                    <h6><a href="/career">Career</a></h6>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="r-mr-nav nav-link">Learn </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="r-mr-nav nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="d-block d-md-none mobile-nav">
                                    <h6><a href="#">Rem Supply Chain</a></h6>
                                </div>
                                <div className="b-dropdown-menu d-none d-md-block">
                                <h6><a href="#">Rem Supply Chain</a></h6>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="https://medium.com/@remhealth" className="r-mr-nav nav-link" target="_target">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact-us" className="r-mr-nav nav-link">Say Hi</a>
                        </li>
                        <li className="nav-item">
                            <a href="#"><button className="btn sign-up">Sign Up</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="#"><button className="btn signin">Login</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <style jsx>{`
            .navbar-nav {
                flex-direction: row;
            }
          
            .nav-link {
                padding-right: .5rem !important;
                padding-left: .5rem !important;
            }
          
            ml-auto .dropdown-menu {
                left: auto !important;
                right: 0px;
            }

            #nav .logo {
                width: 120px;
            }
            
            #nav {
                padding: 20px;
                color: #053E5F;
                font-style: normal;
                line-height: normal;
                font-size: 14px;
                letter-spacing: -0.01em;
                background-color: white;
            }
            
            #nav .sign-up {
                width: 130px;
                background-color: unset;
                border: 1px solid #06C2CE;
                color: #053E5F;
                margin-right: 20px;
                border-radius: 7px;
                margin-bottom: 10px;
            }
            
            #nav .signin {
                width: 130px;
                background-color: #06C2CE;
                color: white;
                border: 0px;
                border-radius: 7px;
                border: 0px;
                opacity: 0.6;
            }
            
            #nav .signin:hover {
                opacity: 1;
            }
            
            .r-mr-nav {
                margin-right: 30px;
            }
            
            .nav-button {
                width: 150px;
            }
            
            @media screen and (min-width: 601px) {
                #nav .navbar-nav {
                
                }
            }
            
            @media screen and (max-width: 600px) {
                #nav .navbar-nav {
                padding: 30px;
                text-align: center;
                }
            }
            
            #nav .navbar-brand img {
                padding-top: 3px;
            }
            
            #nav li a {
                color: #223D68;
                font-weight: 600;
            }
            
            .mobile-nav {
                width: auto;
                padding: 20px;
            }
            
            .mobile-nav h5 {
                letter-spacing: -0.01em;
                color: #223D68;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            .mobile-nav span {
                display: block;
                margin-bottom: 10px;
                text-transform: uppercase;
                font-size: 13px;
            }
            
            .b-dropdown-menu {
                width: auto;
                padding: 20px;
            }
            
            .b-dropdown-menu h5, .b-dropdown-menu h6 {
                letter-spacing: -0.01em;
                color: #223D68;
                font-size: 13px;
            }
            
            .b-dropdown-menu h5 a:hover {
                text-decoration: none;
            }
            
            .b-dropdown-menu h6 a:hover {
                text-decoration: none;
            }
            
            .b-dropdown-menu p {
                margin-bottom: 30px;
                font-size: 15px;
            }
            
            .b-dropdown-menu span {
                display: block;
                margin-bottom: 10px;
                text-transform: uppercase;
                font-size: 13px;
            }
            
            .support-dropdown {
                width: 200px;
                padding: 20px;
            }
            
            .support-dropdown a {
                margin-bottom: 15px;
                letter-spacing: -0.01em;
                color: #223D68;
                font-size: 14px;
            }
            
            .support-dropdown a:hover {
                text-decoration: none;
            }
        `}</style>
    </div>
    );
}

export default NavBar;