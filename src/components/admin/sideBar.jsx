'use client'
import React, { createContext } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Link from 'next/link';
import FaceIcon from '@mui/icons-material/Face';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaletteIcon from '@mui/icons-material/Palette';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BrushIcon from '@mui/icons-material/Brush';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EventIcon from '@mui/icons-material/Event';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightModeIcon from '@mui/icons-material/LightMode';
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const SideBar = () => {
    const { data: session } = useSession()

    const Context = createContext()
    return (
        <Sidebar>
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? '#b4c2c0' : '#718280',
                                backgroundColor: active ? '#F9E2C6' : '#F7D9B2',
                            };
                    },
                }}
            >
                <MenuItem>
                    <div className="card" style={{ backgroundColor: "#FFD3B5" }}>
                        <div className="card-body">
                            <FaceIcon /> Maquillage
                        </div>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="card" >
                        <div className="card-body">
                            {session?.user?.image ? (
                                <div>
                                    <Image
                                        src={session.user.image}
                                        alt={session.user.email}
                                        className='inline-block rounded-full'
                                        width={30}
                                        height={30}
                                        style={{ width: 'auto', height: 'auto' }}
                                    />
                                    {session.user.email}
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </MenuItem>
                <MenuItem component={<Link href="/admin/dashboard" />}>
                    <DashboardIcon />
                    Tableau de bord
                </MenuItem>
                <MenuItem component={<Link href="/admin/products" />}>
                    <PaletteIcon />
                    Produits
                </MenuItem>
                <MenuItem component={<Link href="/admin/categories" />}>
                    <LocalOfferIcon />
                    Catégories
                </MenuItem>
                <MenuItem component={<Link href="/admin/scategories" />}>
                    <BrushIcon /> Sous/Catégories
                </MenuItem>
                <MenuItem component={<Link href="/admin/users" />}>
                    <GroupIcon />
                    Utilisateurs
                </MenuItem>
                <MenuItem component={<Link href="/admin/orders" />}>
                    <ReceiptIcon />
                    Commandes
                </MenuItem>
                <MenuItem component={<Link href="/admin/calendars" />}>
                    <EventIcon />
                    Calendrier
                </MenuItem>
                <MenuItem component={<Link href="/admin/chart" />}>
                    <BarChartIcon />
                    Graphique
                </MenuItem>
                <MenuItem component={<Link href="/admin/theme" />}>
                    <LightModeIcon />
                    Thème
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideBar;
