import { type NextPage } from "next";
import Head from "next/head";
import FuelTable from "../../components/FuelTable";

const Log: NextPage = () => {
  return (
    <>
      <Head>
        <title>Logg</title>
        <meta name="log" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FuelTable />
    </>
  );
};

export default Log;