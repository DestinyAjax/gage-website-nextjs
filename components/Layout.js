import Head from 'next/head'
import NavBar from './NavBar'
import FooterLink from './FooterLink'
import Reminder from './Reminder'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Gage - A Citizen Engagement Tool for Africa</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="/static/css/fontawesome.min.css" rel="stylesheet"/>
                <link href="/static/css/style.css" rel="stylesheet"/>
            </Head>
            <div>
                <NavBar />
                <div>
                    {props.children}
                </div>
                <Reminder />
                <FooterLink />
            </div> 
        </div>
    );
}

export default Layout;