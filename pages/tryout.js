import TryoutForm from "../components/tryout-form";
import Head from "next/head";

function tryout() {
  return (
    <>
      <Head>
        <title>KC Hornets | Tryout Form</title>
        <meta name="keywords" content="tryout form" />
      </Head>
      <div>
        <h1>Tryout</h1>
        <p>
          <TryoutForm />
        </p>
      </div>
    </>
  );
}

export default tryout;
