import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';

import styles from './styles.module.scss';


interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton ({ priceId }: SubscribeButtonProps) {    
    const [ Session ] = useSession();
    
    async function handleSubscribe() {
        if (!Session) {
            signIn('github')
            return;
        }
        
        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;
            
            const stripe = await getStripeJS()
            
            .then( async function(session) {
                return await stripe.redirectToCheckout({ sessionId: sessionId })
            })
            } catch (err) {
                alert ('Erro Ocurred');
            }
        }

    return (
        <button 
        type="button"
        className={styles.subscribeButton} 
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}