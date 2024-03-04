"use client";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="">
    <ul className="">
      <li className="">
        <a href="/">
          <Image src="/logo.png" alt="Logo" className="" height="100" width="100"/>
        </a>
      </li>
      <li className="">
        <a href="#" className="">Products</a>
      </li>
      <li className="">
        <a href="#" className="">Solutions</a>
      </li>
      <li className="">
        <a href="#" className="">Tribe</a>
      </li>
      <li className="">
        <a href="#" className="">Insights</a>
      </li>
      <li className="">
        <a href="#" className="">Why Tubol</a>
      </li>
      <li className="">
        <a href="#" className="">Log In</a>
      </li>
    </ul>
  </nav>
  
  );
}

export default NavBar;
