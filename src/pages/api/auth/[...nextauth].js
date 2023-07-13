import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github'
import { fauna } from '../../../services/fauna'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn(user, account, profile, credentials) {
      const { email } = user
      
      try {
        await fauna.query(
            q.Create(
              q.Collection('users'),
              { data: { email } }
              )
            )

              return true
            } catch (error) { 
              console.log(error)
              return false
            }
          },
        }, 
      }
export default NextAuth(authOptions)