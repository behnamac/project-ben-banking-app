import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Behnam" }; // Simulating a logged-in user. In a real application, this would be fetched from a global state or context.
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and mange your account and transactions efficiently"
        />
        <TotalBalanceBox
          account={[]}
          totalBank={1}
          totalCurrrentBalance={427.74}
        />
      </div>
    </section>
  );
};

export default Home;
