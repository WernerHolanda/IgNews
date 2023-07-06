//essa é a pagina home

import { GetStaticProps } from 'next';
// Head é um component react q eu posso colocar em qql lugar da tela.
import Head from 'next/head';


import { SubscribeButton } from '../components/SubscribeButton';
//import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
    product: {
        priceId: string;
        amount: number;
    }
}


export default function Home({ product }: HomeProps) {
    return (
        <>
        <Head>
            <title> Início | ig.news </title>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>

        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <h4>👏 Hey, welcome</h4>
                
                <h1>News about the<span> React </span>world</h1>

                <p>Get acess to all the publications <span>for $ 9.90 {product.amount} month</span></p>
            
                <SubscribeButton priceId={product.priceId} />
            
            </section>
            <img src="/images/Mulher.png" alt="mulher-no-notebook" />
            
        </main>

        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
     
    //price_1NQDjGAJTwODLznj2ctv8lQK
    //price_1IVhtPEr8Nl1t46KAhq5JOHw
  //  const price = await stripe.prices.retrieve('price_1NQbcdAJTwODLznj7VITty1m') 
    
    const product = {
      //  priceId: price.id,
    //    amount: 9.90
        //new Intl.NumberFormat('en-US', {
          //  style: 'currency',
           // currency: 'USD',
           // }).format(price.unit_amount / 100),
        };
        
       return {
            props: {
                product,
             },
             revalidate: 60 * 60 * 24,// =24 hours
        }
    }
