

import Banner from './components/Banner';
import Card from './components/Card';
import Navbar from './components/Navbar';
import b1 from './img/banner.avif'
import b2 from './img/banner2.jpg'
import b3 from './img/banner3.jpg'

function App() {
  const images = [
    b1,
    b2,
    b3

  ]
  return (
    <div className='w-full overflow-hidden'>
    <Navbar />
    <Banner images={images} />
    <Card />
    </div>
  );
}

export default App;
