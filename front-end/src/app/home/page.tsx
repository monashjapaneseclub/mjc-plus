import React from "react";
import { Header, Footer, SponsorCarousel } from "@/src/_components/page-component";
import HomeBody from "./HomeBody";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HomeBody />
      <SponsorCarousel />
      <Footer />
    </div>
  );
};

export default Home;
