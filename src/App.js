import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Movies from './components/Movies'
import WebSeries from './components/WebSeries'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <>
      <Navbar></Navbar>
      <Header></Header>
      <Movies></Movies>
      <WebSeries></WebSeries>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;
