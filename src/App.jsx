import { Header } from './modules/Header/Header';
import { Main } from './modules/Main/Main';
import { Footer } from './modules/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
