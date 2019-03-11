import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => {
    return (
        <div id="company-page">
            <Layout>
                <div className="section-1 text-center">
                    <h1>Govgage helps citizens <br/>in Africa to hold government <br/>leaders accountable</h1>
                    <p>"Change will not come if we wait for some other person or some other time. We are the<br/>
                    ones that we've been waiting for. We are the change that we seek."<br/>
                    Barack Obama</p><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-2">
                                <h3>1</h3>
                                <span>Federal Government</span>
                            </div>
                            <div className="col-md-2">
                                <h3>36</h3>
                                <span>States</span>
                            </div>
                            <div className="col-md-2">
                                <h3>774</h3>
                                <span>Local Government</span>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 col-xs-12 col-sm-12 background"><div></div></div>
                            <div className="col-md-6 col-xs-12 col-sm-12 content">
                                <h1>An engine room for the development of Africa</h1>
                                <p className="primary-c">“Fighting corruption is not just good governance.<br/>
                                It's self-defense. It's patriotism”.<br/>
                                Joe Biden</p>
                                <p>Govgage builds civic technology to empower <br/>the
                                new generation of citizens</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default About;