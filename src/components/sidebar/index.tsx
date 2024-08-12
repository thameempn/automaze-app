"use client";
import { menuOptions } from "@/lib/constant";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link className="flex font-bold flex-row" href="/">
          fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer",
                        {
                          "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Sidebar;
