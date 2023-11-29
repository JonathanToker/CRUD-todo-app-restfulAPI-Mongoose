import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
const MainNavbar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image src="/todos-logo.png" alt="google logo" width={40} height={40} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-2">
          Toker's Todos
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link href="/" className="pl-2">
          Todos
        </Link>
        <Link href="/addTodo" className="pl-2">
          Add Todo
        </Link>
        <Link href="https://github.com/YonatanToker/CRUD-todo-app-restfulAPI-Mongoose" className="pl-2">
          Source Code
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default MainNavbar;
