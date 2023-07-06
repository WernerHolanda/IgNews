import { FaGithub } from 'react-icons/fa'; //significa font awesome, e nela possui o simbolo do github.
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'; //fi = feder icon.'. é o sinal de fechar, o x.


export function SignInButton () {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        
        <button 
            className={styles.SignInButton} 
            type="button"
        >
            <FaGithub color="#04b361" />
            Werner Holanda
        <FiX color="#737380" className={styles.CloseIcon} />
        </button>
    ) : (

        <button 
                className={styles.SignInButton} 
                type="button"
            >
            <FaGithub color="#eba417" />
            Sign in with GitHub
            
        </button>
        );       
}
