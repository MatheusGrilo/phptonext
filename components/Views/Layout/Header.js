import React from "react";
import Head from "next/head";

function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Node.js, Next.js, React-Table, TailWindCSS, MongoDB, and much more :)"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
