// ------------- Libraries ---------------------
// Creating routes
import { Route, Routes } from 'react-router-dom'
// ------------- Files --------------------------
// Views
import Home from './pages/normal/Home'
import UserPage from './pages/user/UserPage'
import NotFound from './pages/NotFound'
// Components
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/normal/AboutUs'



// Render 
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
