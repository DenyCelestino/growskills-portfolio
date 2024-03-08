import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/" className="logo"></Link>
    </header>
  );
};

export default Header;
