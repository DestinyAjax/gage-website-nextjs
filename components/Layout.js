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
                <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" type="text/javascript"></script>
                <script src="/static/js/bootstrap.min.js" type="text/javascript"></script>
                <link href="/static/css/style.css" rel="stylesheet"/>
                <link href="/static/css/utilities.css" rel="stylesheet"/>
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