import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  const [currenView, setCurrentView] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewChange = (view, product = null) => {
setCurrentView(view);
setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
     setCart([...cart, product]);
   alert(`${product.nameItem} ha sido añadido al carrito 2`);
  };

  const renderView = () =>{
       switch (currenView) {
        case 'list':
          return <ProductList onViewChange={handleViewChange}/>
          case 'detail':
            return (
              <ProductDetail product={selectedProduct}
              onViewChange={handleViewChange}
              onAddToCart={handleAddToCart} />

            );
            case 'cart':
              return <Cart cart={cart}/>;
              default:
                return <ProductList onViewChange={handleViewChange} />
       }
      };
      

  return (
    <div className="App">
      <Header onViewChange={handleViewChange} />
      
      <main>
       {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
