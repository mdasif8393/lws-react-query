import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="flex m-2 ">
      <ProductList />
      <ProductDetails id={1} />
    </div>
  );
}

export default App;
