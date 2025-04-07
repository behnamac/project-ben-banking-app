import React from "react";

interface RightSidebarProps {
  user: string;
  transactions: any[];
  banks: string[];
}

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8 ">
        <div className="profile-banner"></div>
      </section>
    </aside>
  );
};

export default RightSidebar;
