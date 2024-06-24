
import Item from "./components/Item";
import Cart from "./components/Cart";
import './App.css';


const App = () => {
 
  return (
    <>
    
      <div className="navbar">
        <h1>Centralized E-Commerce Cart</h1>
       
      </div>
     
    <div className='App'>

     
      <Item name="Rich Dad Poor Dad" price={10000}/>
      <Item name="Mobile" price={40000}/>
      <Item name="USB" price={3000}/>
      <Item name="MacBook Pro" price={9000}/>
      <Cart/>
     
    </div>
    </>
  );
};

export default App;
