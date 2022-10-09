import React from "react";
import { Button, Buttons, Nav } from "./styles";
import { FaHome, FaShoppingCart } from "react-icons/fa";

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
          <Buttons>
            <Link href="/">
              <Button>
                <FaHome />
              </Button>
            </Link>
            <Link href="/cart">
              <Button>
                <FaShoppingCart />
              </Button>
            </Link>
          </Buttons>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
