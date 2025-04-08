import React from "react";

interface BankCardProps {
  account: any;
  userName: string;
  showBalance?: boolean;
}

const BankCard = ({ account, userName, showBalance }: BankCardProps) => {
  return <div>BankCard</div>;
};

export default BankCard;
