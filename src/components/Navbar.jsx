import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import { useCart } from "../context/CartContext.jsx"
function Navbar(){
    const [selectedLang, setSelectedLang] = useState("EN")
    const [menuOpen, setMenuOpen] = useState(false)
    const { itemCount, toggleCart } = useCart()
    return (
        <>
            <div className={styles.navbarcon}>
                <div className={styles.navbar}>
                    <button
                            className={styles.hamburger}
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle navigation menu"
                        >
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
                                </svg>
                            )}
                        </button>
                    <div className={styles.langcon}>
                        <button
                            className={`${styles.lang} ${selectedLang === "EN" ? styles.langActive : ""}`}
                            onClick={() => setSelectedLang("EN")}
                        >EN</button>
                        <span>/</span>
                        <button
                            className={`${styles.lang} ${selectedLang === "AR" ? styles.langActive : ""}`}
                            onClick={() => setSelectedLang("AR")}
                        >AR</button>
                    </div>
                    <Link to="/" className={styles.logo}><h1 className={styles.logo}>The Scent Chemist</h1></Link>
                    <div className={styles.navright}>
                        <div className={styles.searchbar}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.searchicon}
                            >
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                            </svg>
                            <p className={styles.search}>Search</p>
                        </div>
                        <button
                        type="button"
                        className={styles.cartBtn}
                        onClick={toggleCart}
                        aria-label="Open cart"
                        >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.cart}
                        >
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
                        </button>
                    </div>
                </div>
                <div className={styles.navmenu}>
                    <ul>
                        <a href="#">
                            <li>Men</li>
                        </a>
                    </ul>
                    <ul>
                        <a href="#">
                            <li>Women</li>
                        </a>
                    </ul>
                    <ul>
                        <a href="#">
                            <li>Unisex</li>
                        </a>
                    </ul>
                    <ul>
                        <a href="#">
                            <li>Tester Set</li>
                        </a>
                    </ul>
                    <ul>
                        <a href="#">
                            <li>Customize</li>
                        </a>
                    </ul>
                </div>
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                    <div className={styles.mobileLang}>
                        <span className={styles.mobileLangLabel}>Language</span>
                        <button
                            className={`${styles.lang} ${selectedLang === "EN" ? styles.langActive : ""}`}
                            onClick={() => setSelectedLang("EN")}
                        >EN</button>
                        <span>/</span>
                        <button
                            className={`${styles.lang} ${selectedLang === "AR" ? styles.langActive : ""}`}
                            onClick={() => setSelectedLang("AR")}
                        >AR</button>
                    </div>
                    <nav className={styles.mobileNav}>
                        <a href="#" onClick={() => setMenuOpen(false)}>Men</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Women</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Unisex</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Tester Set</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Customize</a>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar
