import { Footer } from "./components/layouts/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import Counter from "./components/common/counter/Counter";
import { useState } from "react";
import Users from "./components/pages/user/Users";
import Comments from "./components/pages/comments/Comments";
import { BrowserRouter, Routes,Route } from "react-router";
import { HiH2 } from "react-icons/hi2";
import Cart from "./components/pages/Cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />

        <Route path="*" element={<h2>404 Not found </h2>} />

      </Routes>
      <Footer />
    </BrowserRouter>)
}
export default App;
