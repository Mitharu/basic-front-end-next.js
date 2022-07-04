import Head from 'next/head';
import Navbar from './partial/navBar';

function Layout(props) {
    return ( 
        <>
            <Head>
                <title> { props.title } </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                props.mode === 'login' ?
                <LayoutLogin>{props.children}</LayoutLogin> :
                <LayoutMain>{props.children}</LayoutMain>
            }
            
        </>
    );
}

function LayoutMain({ children }) {
    return (
        <>
            <Navbar />
            <main> {children} </main>
        </>
    );
}

function LayoutLogin({ children }) {
    return (
        <main> {children} </main>
    );
}

export default Layout
