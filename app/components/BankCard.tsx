import Link from "next/link";
import React from "react";
import { formatAmount } from "@/lib/utils";
interface BankCardProps {
  account: any;
  userName: string;
  showBalance?: boolean;
}

const BankCard = ({ account, userName, showBalance = true }: BankCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">{formatAmount(account.currentBalance)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
