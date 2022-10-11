import React, { useContext } from "react";
import { Button, Buttons, Nav, CartProductsNumber } from "./styles";
import { AiOutlineHome, AiOutlineShopping} from "react-icons/ai"

import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../../contexts/CartContext";

const Header = () => {
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state

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
                <CartProductsNumber>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</CartProductsNumber>
              </a>
            </Link>
          </Buttons>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
