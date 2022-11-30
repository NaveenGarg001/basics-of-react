
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar.js';
import Card from './Component/Card.js';

function App() {
  return (
    <>
    <div class='container'>
   <Navbar/>
   <h2 class="text-center mt-5 mb-5">Our Services</h2>
   
    <div className='row'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
   </>
  );
}

export default App;
