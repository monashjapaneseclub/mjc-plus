import React from "react";
import { Header, Footer, SponsorCarousel } from "@/src/_components/page-component";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SponsorCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
