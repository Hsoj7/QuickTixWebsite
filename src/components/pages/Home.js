import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import AppFeaturesSection from '../AppFeaturesSection';
import AppFeaturesSectionReverse from '../AppFeaturesSectionReverse';
import Footer from '../Footer';

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
    source: "./images/phoneScreenShots/2ParticipantInformation.png",
    text: "Collect your participant's information and tickets purchased"
  };

  const thirdData = {
    background: "#EFEFEF",
    textColor: "#3f3f3f",
    alt: "Allocating Raffle Tickets",
    source: "./images/phoneScreenShots/3Allocate.png",
    text: "Let participants allocate tickets to items in a raffle event"
  };

  const fourthData = {
    background: "#ffffff",
    textColor: "#3F3F3F",
    alt: "Generate Winners",
    source: "./images/phoneScreenShots/4Winner.png",
    text: "Generate random winners for your events"
  };

  const fifthData = {
    background: "#EFEFEF",
    textColor: "#3f3f3f",
    alt: "Event metrics",
    source: "./images/phoneScreenShots/5Report.png",
    text: "Event metrics for government reporting"
  };

  return (
    <>
      <Navbar />
      <HeroSection />

      <AppFeaturesSection data={firstData} />
      <AppFeaturesSectionReverse data={secondData} />
      <AppFeaturesSection data={thirdData} />
      <AppFeaturesSectionReverse data={fourthData} />
      <AppFeaturesSection data={fifthData} />

      <Footer />

    </>
  );
}

export default Home;
