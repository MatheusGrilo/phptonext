import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "your username",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "grilo@vercel.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "grilo" &&
          credentials.password === "grilo1234"
        ) {
          return {
            id: 2,
            name: "Grilo",
            email: "grilo@grilo.com",
          };
        }

        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: "f7rqtPVfVvwgqdANfxps4JSnEsh2eGYV+ZzzkSE/9hc=",
  jwt: {
    secret: "f7rqtPVfVvwgqdANfxps4JSnEsh2eGYV+ZzzkSE/9hc=",
    encryption: true,
  },
});
