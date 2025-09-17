import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Achievements from "../components/home/Achievements";
import Bundel from "../components/home/Bundel";
import FAQ from "../components/home/FAQ";
import Services from "../components/home/Services";

interface HomeProps {
  title: string; 
}

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero/>
      <Bundel/>
      <Achievements/>
      <Services/>
      <FAQ/>
    </>
  );
};

export default Home;
