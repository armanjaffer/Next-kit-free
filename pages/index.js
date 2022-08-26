import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kindred for Businesses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
