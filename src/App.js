import PageNotFound from './components/404';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Reservations from './components/Reservation';
import Footer from './components/Footer';

function App() {
  let Component;
  switch(window.location.pathname){
    case("/") :
      Component = Home;
      break
    case ("/menu") :
      Component = Menu;
      break;
    case ("/about") :
        Component = About;
        break
    case ("/reservation") :
      Component = Reservations;
      break;
    default:
      Component = PageNotFound;
  }

  return (
    <div className="App">
      
      <Nav />
      <Component/>
      <Footer/>
    </div>
  );
}

export default App;
