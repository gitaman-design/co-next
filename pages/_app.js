import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from './api/apolloClient';
import Header from './components/Header'
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {

  return (
      <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
      
      </>
    ) 
}

export default MyApp
