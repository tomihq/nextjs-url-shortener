"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { LINKEDIN, PORTFOLIO } from "@/config";

const Navbar = () => {
  return (
    <div className="hidden md:flex w-full  items-center justify-center">
      <NavigationMenu className="py-3 sticky top-0 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={PORTFOLIO} legacyBehavior passHref >
              <NavigationMenuLink target="_blank" className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={LINKEDIN} legacyBehavior passHref >
              <NavigationMenuLink target="_blank" className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={PORTFOLIO} legacyBehavior passHref >
              <NavigationMenuLink target="_blank" className={navigationMenuTriggerStyle()}>
                Portfolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
