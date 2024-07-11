import Header from "../components/Header";
import React from "react";
import './globals.css'
import Londing from "@/components/Londing";

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Next.js</h1> */}
      <Header /> 
      <main>
        <Londing />
      </main>
    </div>
  );
}

export default Home;