'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { grey, pink } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useRouter } from 'next/navigation'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from "./shoppingCart/cartModal";
import { useShoppingCart } from "use-shopping-cart" ;


function Menu() {

    const { handleCartClick, cartCount } = useShoppingCart();
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <>
            <Navbar style={{ backgroundColor: pink[200] }} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">KIKO</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link as={Link} href="/">
                            <HomeIcon style={{ color: 'white' }} />
                            Home
                        </Nav.Link>
                        {session ? <Nav.Link onClick={() => signOut()}><LogoutIcon />Se
                            déconnecter</Nav.Link>
                            : <Nav.Link onClick={() => signIn()}><AccountCircleIcon />Se
                                connecter</Nav.Link>
                        }
                        <Nav.Link as={Link} href="/client/pageAide">
                            <HelpIcon style={{ color: 'white' }} />
                            Aide
                        </Nav.Link>
                    <Nav.Link onClick={() =>
                        router.push('/client/cartProducts')}><ShoppingBasketIcon style={{
                            color:
                                'pink'
                        }} /> Shopping Cart </Nav.Link>
                </Nav>
                <button className="relative" onClick={() => handleCartClick()}>
                    <ShoppingCartIcon color="inherit" style={{fill: 'white'}} />
                    <div className="rounded-full flex justify-center items-center bg-pink-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                        {cartCount}
                    </div>
                </button>
                <CartModal />
            </Container>
        </Navbar >
        </>
    );
}

export default Menu;
