import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Accessories from "./components/Accessories";
import MainLayout from "./components/layouts/MainLayout";
import NotFound from "./components/NotFound";
import CartPage from "./pages/CartPage";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Product from "./pages/Product";

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
