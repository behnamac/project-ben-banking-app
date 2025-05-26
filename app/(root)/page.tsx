import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Behnam",
    lastName: "SEP",
    email: "behnam.sep@gmail.com",
  }; 
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and mange your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={427.74}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  );
};

export default Home;
