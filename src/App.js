import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
