import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Banner from './Pages/Banner/Banner';
import Categories from './Pages/Categories/Categories';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
    </div>
  );
}

export default App;
