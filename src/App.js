import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
