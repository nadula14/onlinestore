import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import EquipmentPage from './pages/Equipment/EquipmentPage';
import CartPage from './pages/Cart/CartPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/equipment/:id" element={<EquipmentPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
}
  