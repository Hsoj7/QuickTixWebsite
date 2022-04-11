import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import AppFeaturesSection from '../AppFeaturesSection';
import AppFeaturesSectionReverse from '../AppFeaturesSectionReverse';

// import Footer from '../Footer';

function Home() {
  const firstData = {
    background: "#EFEFEF",
    textColor: "#3F3F3F",
    alt: "Home Screen",
    source: "./images/phoneScreenShots/1HomeScreen.png",
    text: "Create and manage your own raffle and 50/50 lottery events"
  };

  const secondData = {
    background: "#ffffff",
    textColor: "#3f3f3f",
    alt: "Collecting Information",
    source: "./images/phoneScreenShots/1HomeScreen.png",
    text: "Collect your participant's information and tickets purchased"
  };

  const thirdData = {
    background: "#EFEFEF",
    textColor: "#3F3F3F",
    alt: "Generate Winners",
    source: "./images/phoneScreenShots/1HomeScreen.png",
    text: "Generate random winners for your event"
  };

  return (
    <>
      <Navbar />
      <HeroSection />

      <AppFeaturesSection data={firstData} />
      <AppFeaturesSectionReverse data={secondData} />
      <AppFeaturesSection data={thirdData} />

    </>
  );
}

export default Home;
