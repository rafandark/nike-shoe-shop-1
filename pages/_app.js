import "../styles/globals.css";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from 'react-redux'
import store from "../store/store";
import Header from '../components/Header'
import  Footer  from "../components/Footer";
import { Oswald ,Andada_Pro} from '@next/font/google'
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-Oswald',
  })

  const AndadaPro = Andada_Pro({
    subsets: ['latin'],
    variable: '--font-Anadad',
  })


 


export default function App({ Component, pageProps }) {
    const router = usePathname();

    return (
        <>
            <Head>
                <title className="text-[#d1a41a]">  Shoe Store | Purchase Your Dream  </title>
                <meta
                    name="Shoe Store"
                    content="Purchase Your Dream"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                
            </Head>
        <main className={` ${oswald.className} font-Oswald`}>
     
        <ClerkProvider {...pageProps}>
           <Provider store={store}>
            <Header />
          {/* <Loader/> */}
            <Component {...pageProps} />
            <Footer />
            </Provider>
           </ClerkProvider>
           
        </main>
        </>
    );
}
