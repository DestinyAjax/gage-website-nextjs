import Link from 'next/link'
import '../static/css/style.css'

const NavBar = () => {
    return (
        <div>
        <nav id="nav" className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className="logo" src="/static/images/gage-logo.png" /></a>
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
                            <a href="/signup"><button className="btn sign-up">Sign Up</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/signin"><button className="btn signin">Login</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default NavBar;