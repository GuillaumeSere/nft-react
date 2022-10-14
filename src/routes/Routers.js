import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Market from "../pages/Market"
import Create from "../pages/Create"
import Contact from "../pages/Contact"
import SellerProfile from "../pages/SellerProfile"
import EditProfile from "../pages/EditProfile"
import Wallet from "../pages/Wallet"
import NftDetails from "../pages/NftDetails"

const Routers = () => {
  return (
        <Routes>
            <Route path="/nft-react" element={<Navigate to="/home" />} />
            <Route path="/nft-react/home" element={<Home />} />
            <Route path="/nft-react/market" element={<Market />} />
            <Route path="/nft-react/create" element={<Create />} />
            <Route path="/nft-react/contact" element={<Contact />} />
            <Route path="/nft-react/edit-profile" element={<EditProfile />} />
            <Route path="/nft-react/seller-profile" element={<SellerProfile />} />
            <Route path="/nft-react/wallet" element={<Wallet />} />
            <Route path="/nft-react/market/:id" element={<NftDetails />} />
        </Routes>
  )
}

export default Routers
