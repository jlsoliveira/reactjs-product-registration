import React from "react";
import { Routes, Route} from "react-router-dom"

import Home from "../pages/home"
import Product from "../pages/product"
import SearchProduct from "../pages/search-product"


export default function AppRouter() {
  return(
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/product'} element={<Product />} />
      <Route path={'/search-product'} element={<SearchProduct />} />
    </Routes>
  )
}
