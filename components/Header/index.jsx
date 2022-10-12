import React, { useContext } from "react";
import { Button, Buttons, Nav, CartProductsNumber } from "./styles";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const { cartItems, totalItems } = useCart();

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
              <a>
                <Button>
                  <AiOutlineHome />
                </Button>
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <Button>
                  <AiOutlineShopping />
                </Button>
                <CartProductsNumber>
                  {totalItems}
                </CartProductsNumber>
              </a>
            </Link>
          </Buttons>
        </div>
      </Nav>
    </div>
  );
};

export default Header;