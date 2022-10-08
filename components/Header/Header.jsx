import React from "react";
import { Button, Nav } from "./styles";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Nav>
        <Link href="/">
          <a>
            <Image
              src="/images/marvel-logo.png"
              width={77}
              height={35}
              alt="logo da Marvel"
            />
          </a>
        </Link>
        <div>
          <Button>
            <Link href="/cart">Cart</Link>
          </Button>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
