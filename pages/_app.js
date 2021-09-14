import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from './api/apolloClient';
import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer';



function MyApp({ Component, pageProps }) {



  return (
    <>
      <Head>

        
        <script  dangerouslySetInnerHTML={{
                __html: `
                     (function(d,c) {
                        var b = d.body.appendChild(d.createElement('div')),
                            f=b.appendChild(d.createElement('iframe'));
                            b.style.display='none';f.src="";
                        f.onload = function() {
                            var fw=f.contentWindow,
                            fd=f.contentDocument,
                            s=fd.body.appendChild(fd.createElement('script'));
                            fw.widget={frame:f,container:b,config:c};s.src='https://app.bigradar.io/widget.js';
                        };
                        return b;
                    })(document, {
                        app_id: '21b2851',
                        // name: '<name>',
                        // email: '<email>',
                    }) 
            `}}/>
        
            

      </Head>
      <ApolloProvider client={client}>

        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
      
      </>
    ) 
}

export default MyApp
