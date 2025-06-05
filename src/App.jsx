import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import backgroundImage from './assets/image.jpg';
import './App.css'
import LoginPage from './components/LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
  className="h-screen w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>

      <header className="flex justify-between  items-center px-10 py-6">

        {/* Logo */}
        <div className="text-white text-3xl font-bold">LOGO</div>

        {/* Navigation Links */}
        <nav className="space-x-8 text-white text-lg font-medium hidden sm:block">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </nav>

        {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-100"
          >
            Login
          </button>
        
      </header>
      {showLogin && <LoginPage onBack={() => setShowLogin(false)} />}
    </div>
  )
}

export default App
