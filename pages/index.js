import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => {
    return (
        <div id="home-page">
            <Layout>
                <section className="slider">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="top-content">
                                    <h3>A citizen engagement tool for africa</h3>
                                    <h1>Govgage helps citizens in <br/>Africa to hold government <br/>leaders accountable</h1>
                                    <div className="d-block d-md-none mobile-nav">
                                        <img src="#"/>
                                    </div>
                                    <p>
                                        <a href="#">
                                            <button className="btn b-button-lg">Rate your Government Now</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12 slider-sec"></div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="r-p">Simple, Easy citizen rating</p>
                                <h1 className="r-h1">Building a nation is hard. Holding <br/>leaders accountable shouldn't be.</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 col-sm-12 background"><div></div></div>
                            <div className="col-md-6 col-xs-12 col-sm-12 content">
                                <p className="r-p">Every Month can be an election of our leaders and administrators</p>
                                <h1 className="r-h1">Rate the government leaders, sector, programs and practices using our modern, 
                                frictionless and painless solution using any of our channels:</h1>
                                <ul>
                                    <li><i className="fas fa-check"></i> Web </li>
                                    <li><i className="fas fa-check"></i> Mobile App</li>
                                    <li><i className="fas fa-check"></i> USSD </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="covered">
                    <div className="container">
                        <h1>Our Impacts</h1>
                        <div className="row text-center">
                            <div className="col-md-4 col-xs-12 col-sm-12">
                                <div className="col-md-12 col-xs-12 col-sm-12 card">
                                    <p><img src="/static/images/icon-1.png" /></p>
                                    <h2>Empowering people</h2>
                                    <p>Providing more than 180 million with an online and offline platform to hold their leaders accountable to guarantee nation growth </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12">
                                <div className="col-md-12 col-xs-12 col-sm-12 card">
                                    <p><img src="/static/images/icon-2.png" /></p>
                                    <h2>More disclosure and transparancy</h2>
                                    <p>Gage is an open data platform, all citizen can rate, see and share government approval ratings and views
                                    government budgets, projects and practice</p><br/>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12">
                                <div className="col-md-12 col-xs-12 col-sm-12 card">
                                    <p><img src="/static/images/icon-3.png" /></p>
                                    <h2>Impacting Economies</h2>
                                    <p>Thanks to our raters, more than 180 million citizens can collectively express their with data, ensuring that leaders utilize resources
                                    in the best interest of the nation state.</p><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 col-sm-12 content">
                                <p className="r-p">Let's make public servants serve the public</p>
                                <h1 className="r-h1">774 local government, 36 states<br/> and 1 federal government</h1>
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Search for your government" />
                                </div><br/>
                                <div className="form-group">
                                  <button className="btn btn-lg br-button" type="button">Find your government</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12 background"><div></div></div>
                        </div>
                    </div>
                </section>
                <section className="section-5">
                  <h1 className="r-p">Stories</h1>
                  <p className="text-center">Building Govgage was not a walt in the park. Launching was even <br/>harder. Read stories from our journey in creating a platform for<br/>
                  citizens tol hold government accountable.</p><br/>
                  <div className="container">
                    <div className="row text-center">
                      <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                          <img src="/static/images/home-img3.png" className="rounded"/>
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-12" >
                        <div className="col-md-12 col-xs-12 col-sm-12">
                          <img src="/static/images/home-img4.png" className="rounded" />
                        </div>
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                          <img src="/static/images/home-img2.png" className="rounded"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-xs-12 col-sm-12">
                        <a href="#" target="_blank">
                          <button className="btn btn-primary">See more stories</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
            </Layout>
        </div>
    );
}

export default Index;