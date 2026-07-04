import { Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import styles from "../src/styles/App.module.css"
import Bestsellers from './components/Bestsellers.jsx'
import Menperfumes from './components/Menperfumes.jsx'
import Womenperfumes from './components/Womenperfumes.jsx'
import Unisexperfumes from './components/Unisex.jsx'
import Customperfume from './components/Customperfume.jsx'
import Samples from './components/Samples.jsx'
import Collections from './components/Collections.jsx'
import Footer from './components/Footer.jsx'
import ProductPage from './components/ProductPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CartView from './components/CartView.jsx'

function HomePage() {
  return (
    <>
    <div className={styles.hero}>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Bestsellers/>
      <Menperfumes/>
      <Womenperfumes/>
      <Unisexperfumes/>
      <Customperfume/>
      <Samples/>
      <Collections/>
      <Footer/>
    </div>
    </>
  )
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    <CartView />
    </>
  )
}

export default App
