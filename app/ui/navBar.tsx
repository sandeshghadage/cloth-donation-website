"use client";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FlowByteNavBar() {
  const pathname = usePathname();
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Cloth Donation
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link
          href="/"
          className={`link ${pathname === "/" ? "text-blue-400" : ""} `}
        >
          Home
        </Link>
        <Link
          href="/aboutus"
          className={`link ${pathname === "/aboutus" ? "text-blue-400" : ""} `}
        >
          About
        </Link>
        <Link
          href="/volunteer"
          className={`link ${
            pathname === "/volunteer" ? "text-blue-400" : ""
          } `}
        >
          Volunteer
        </Link>
        {/* <Link
          href="/form"
          className={`link ${pathname === "/form" ? "text-blue-400" : ""} `}
        >
          form
        </Link> */}

        <Link
          href="/faqs"
          className={`link ${pathname === "/faqs" ? "text-blue-400" : ""} `}
        >
          FAQs
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
