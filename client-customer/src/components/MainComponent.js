import React, { Component } from "react";
import Menu from "./MenuComponent";
import Inform from "./InformComponent";
import Home from "./HomeComponent";
import Product from "./ProductComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./ProductDetailComponent";
import Signup from "./SignupComponent";
import Active from "./ActiveComponent";
import Login from "./LoginComponent";
import Myprofile from "./MyprofileComponent";
import Mycart from "./MycartComponent";
import Myorders from "./MyordersComponent";


class Main extends Component {
  render() {
    return (
      <div className="body-customer">
        <Menu />
        <Inform />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/category/:cid" element={<Product />} />
            <Route path="/product/search/:keyword" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/active" element={<Active />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/mycart" element={<Mycart />} />
            <Route path="/myorders" element={<Myorders />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Main;
