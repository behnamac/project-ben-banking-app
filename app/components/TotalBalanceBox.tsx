import React from "react";

const TotalBalanceBox = ({
  account = [],
  totalBank,
  totalCurrrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart"></div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account:{totalBank}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount flex-center gap-2"></p>
        </div>
        <div className="total-balance-bank-count">{totalBank} banks</div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
