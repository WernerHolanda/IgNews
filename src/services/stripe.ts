import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
    process.env.STRTIPE_API_KEY,
    {
        apiVersion: '12020-08-27',
        appInfo: {
            name: 'Ignews',
            version
        },
    }
)

