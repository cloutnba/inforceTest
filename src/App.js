import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
        <Header/>
      <div className="app-wrapper">
        <div className="app-routes-wrapper">
          <Routes>
            <Route path="/products" element={<Main/>}/>
              <Route path="/products/:id" element={ <ProductDetails/> }/>
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
