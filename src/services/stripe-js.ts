import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJS() {
    const stripeJS = await loadStripe('pk_test_51NQDhQAJTwODLznjT8J2IrMo2P6w4js45lBGi7eviCJP7K77f5DCLJSQDWT8vqJwO5lueET5Mv7wzYwEEm2Q7Jw400fk4w2BuP')

    return stripeJS
} 