import '../style/global.css';
import '../style/global-responsive.css';
import '../style/text-style.css';
import '../style/text-style-responsive.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <title> { props.title } </title>
                <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Component {...pageProps} />
        </>
    
    )
}

export default MyApp