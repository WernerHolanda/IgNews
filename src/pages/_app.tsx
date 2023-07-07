//o '_app' é o que vai ficar sempre ao redor em todas as paginas do meu site/app.
// .'. tudo que estiver aqui vai se repetir em toda as paginas do meu site/

import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import {SessionProvider as NextAuthProvider } from 'next-auth/react'

import type { Session } from "next-auth"

import '../styles/global.scss';

function MyApp ({ Component, pageProps}: AppProps) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
        </NextAuthProvider>
    )
}

export default MyApp 