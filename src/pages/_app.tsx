//o '_app' é o que vai ficar sempre ao redor em todas as paginas do meu site/app.
// .'. tudo que estiver aqui vai se repetir em toda as paginas do meu site/

import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp ({ Component, pageProps}: AppProps) {
    return (
        <>
        <Header />
        <Component {...pageProps} />
        </>
    )
}

export default MyApp 