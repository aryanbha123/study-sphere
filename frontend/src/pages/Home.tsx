import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface HomeProps {
  title: string; 
}

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar/>
      <h1>Welcome to the Home Page</h1>
      <Footer/>
    </>
  );
};

export default Home;
