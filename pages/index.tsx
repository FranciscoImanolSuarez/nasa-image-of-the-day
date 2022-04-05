import type { NextPage } from "next";
import useSWR from "swr";
import Head from "next/head";
import CardComponent from "../components/Card";
import Hero from "../components/Hero";
import SpinnerComponent from "../components/Loader";
import ErrorFetch from '../components/ErrorFetch'
import fetcher from "../utils/fetcher";
import { API_URL, APP_DATA } from "../utils/constant";
const Home: NextPage = () => {
  const API = `${API_URL}${process.env.NEXT_PUBLIC_API_KEY}`;
  const { data, error } = useSWR(API, fetcher);
  if (!data)
    return (
      <>
        <SpinnerComponent />
      </>
    );
  if (error) return <> <ErrorFetch/></>

  return (
    <div>
      <Head>
        <title>{APP_DATA.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CardComponent result={data} />
    </div>
  );
};

export default Home;
