import Head from "next/head";
import Components from "../components/nonprofits/AllComponents";

export default function Nonprofits() {
  return (
    <div>
      <Head>
        <title>Kindred for Nonprofits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
