import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from '../../services/stripe';
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if ( req.method == 'post') {
        const session = await getSession ({ req })

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
        })
        
        //esse const até o else são um click pra intenção de compra
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_adress_collection: 'required',
            line_items: [
                { price: 'price_1NQbcdAJTwODLznj7VITty1m', quantity:1 }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            sucess_url: process.env.STRIPE_SUCESS_URL,
            cance_url: process.env.STRIPE_CANCEL_URL
        })

        return res.status(200).json({ sessionId: stripeCheckoutSession.id });
        
        } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
        
    }
}