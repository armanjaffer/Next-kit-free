import Head from "next/head";
import Components from "../components/faq/FaqComponents";


export default function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
