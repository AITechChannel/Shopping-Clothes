import "./App.scss";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import NotFound from "./components/NotFound";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import { useSelector } from "react-redux";
import CartPage from "./pages/CartPage";
import { useEffect } from "react";
import Accessories from "./components/Accessories";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/accessories", component: Accessories },
  { path: "/contact", component: Accessories },
  { path: "/cart", component: CartPage },
  { path: "/product/:id", component: Detail },
  { path: "*", component: NotFound },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((e, i) => {
            const Page = e.component;
            return (
              <Route
                key={`route_${i}`}
                path={e.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
