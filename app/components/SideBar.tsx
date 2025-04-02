'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface SideBarProps {
  user: {};
}
const SideBar = ({ user }: SideBarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="size-[50px] xl:size-[100px]"
          />
        </Link>
        {sidebarLinks.map((link) => {
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(`sidebar-link`, {
                "bg-bank-gradient": pathName === link.route,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
