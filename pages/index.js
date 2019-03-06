import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => {
    return (
        <div>
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
            </Layout>
            <style jsx>{`
            .top-content {
                padding-left: 60px;
                padding-right: 100px;
                padding-top: 130px;
                padding-bottom: 130px;
              }
              
              @media screen and (min-width: 601px) {
                .slider #s0 {
                  background-image: url(/static/images/home-header.png);
                  background-size: cover;
                  background-repeat: no-repeat;
                  padding: 20px;
                }
              }
              
              .slider {
                margin-top: 80px;
                background-image: url(/static/images/home-header.png);
                background-size: cover;
                background-repeat: no-repeat;
              }
              
              .slider h3 {
                color: #06C2CE;
                font-size: 18px;
                text-transform: uppercase;
              }
              
              .slider h1 {
                font-size: 33px;
                margin-bottom: 30px;
                color: #053E5F;
                text-weight: 600;
              }
              
              .slider button {
                background-color: #06C2CE;
                color: white;
                border: 0px;
                border-radius: 7px;
                padding: 10px 30px 10px 30px;
              }

              .section-2 {
                padding: 20px 80px 0px 80px;
                background-color: #0ca9b0;
              }
              
              .section-2 ul {
                padding-left: 0;
                
              }
              
              .section-2 ul li {
                list-style-type: none;
                font-size: 30px;
                line-height: 40px;
                color: #252a60;
              }
              
              .section-2 ul li i {
                color: white;
                font-size: 15px;
              }
              
              .section-2 .background {
                background-image: url(/static/images/home-img2.png);
                background-size: cover;
                background-repeat: no-repeat;
              }

              .section-2 .background div {
                  padding: 160px;
              }
              
              .r-h1 {
                font-size: 30px;
                color: #252a60;
                margin-bottom: 30px;
                letter-spacing: 0.04em;
                font-weight: 600;
              }

              .r-p {
                  font-size: 25px;
                  text-transform: uppercase;
                  color: white;
              }
              
              .section-2 .content {
                padding-top: 100px;
                padding-bottom: 150px;
                padding-right: 20px;
                padding-left: 50px;
                text-align: left;
              }

              .covered {
                background-color: white;
                padding-top: 35px;
                padding-bottom: 30px;
              }
              
              .covered h1 {
                font-style: normal;
                font-weight: 600;
                line-height: 40px;
                font-size: 22px;
                text-transform: uppercase;
                letter-spacing: 0.04em;
                color: #0ca9b0;
                text-align: center;
                margin-bottom: 90px;
              }
              
              .covered h2 {
                font-style: normal;
                font-weight: 600;
                line-height: 23px;
                font-size: 20px;
                letter-spacing: -0.01em;
                color: #0ca9b0;
                margin-bottom: 15px;
                text-transform: uppercase;
              }
              
              .covered img {
                margin-bottom: 10px;
                width: 132px;
                height: 122px;
              }
              
              .covered .card p {
                font-family: Overpass;
                font-style: normal;
                line-height: 26px;
                font-size: 16px;
                letter-spacing: 0.01em;
                color: #6F7E83;
              }

              .covered .card  {
                text-align: center;
                border: 0px;
              }
            `}</style>
        </div>
    );
}

export default Index;