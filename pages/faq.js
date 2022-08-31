import Head from "next/head";
import FaqComponents from "../components/faq/faqcomponents";


export default function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FaqComponents />
    </div>
  );
}
