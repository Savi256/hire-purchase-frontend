import Head from "next/head";
import Nav from "../Nav";

export default function MainLayout({ children }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    
      {children}
    </div>
  );
}
