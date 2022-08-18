import Head from "next/head";
import Components from "../components/basic/AllComponents";

export default function Basic() {
  return (
    <div>
      <Head>
        <title>Follow for Nonprofits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
