import { FaGithub } from 'react-icons/fa'; //significa font awesome, e nela possui o simbolo do github.
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'; //fi = feder icon.'. é o sinal de fechar, o x.
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton () {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    //const [session] = useSession()

    return session ? (
        <button 
            className={styles.SignInButton} 
            type="button"
            onClick={() => signOut()}
        >
            <FaGithub color="#04b361" />
            {session?.user?.name} 
        <FiX color="#737380" className={styles.CloseIcon} />
        </button>
    ) : (

        <button 
            type="button"        
            className={styles.SignInButton} 
            onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
            <FaGithub color="#eba417" />
            Sign in with GitHub
            
        </button>
        );       
}
