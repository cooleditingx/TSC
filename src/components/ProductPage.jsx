import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/ProductPage.module.css"
import { Navigate, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"
const sizes = ["100ml", "50ml"]

function StarRating({ rating = 4 }) {
    return (
        <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill={i <= rating ? "var(--accent-color)" : "none"}
                    stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
            <span className={styles.ratingCount}>(128)</span>
        </div>
    )
}

function ProductPage() {
    const [selectedSize, setSelectedSize] = useState("100ml")
    const [qty, setQty] = useState(1)
    const [wished, setWished] = useState(false)
    const [activeThumb, setActiveThumb] = useState(0)
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const thumbnails = [
        "../assets/placeholder.jpg",
        "../assets/placeholder.jpg",
        "../assets/placeholder.jpg",
        "../assets/placeholder.jpg",
    ]

    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>

                {/* ── Product grid ── */}
                <section className={styles.productSection}>
                    <div className={styles.productGrid}>

                        {/* Left — images */}
                        <div className={styles.imageCol}>
                            <div className={styles.mainImgWrap}>
                                <img
                                    className={styles.mainImg}
                                    src={thumbnails[activeThumb]}
                                    alt="Product"
                                />
                            </div>
                            <div className={styles.thumbRow}>
                                {thumbnails.map((src, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.thumb} ${activeThumb === i ? styles.thumbActive : ""}`}
                                        onClick={() => setActiveThumb(i)}
                                    >
                                        <img src={src} alt={`View ${i + 1}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right — details */}
                        <div className={styles.detailsCol}>
                            <div className={styles.topRow}>
                                <span className={styles.category}>Men's Collection</span>
                                <button
                                    className={`${styles.wishBtn} ${wished ? styles.wished : ""}`}
                                    onClick={() => setWished(w => !w)}
                                    aria-label="Add to wishlist"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                        fill={wished ? "var(--accent-color)" : "none"}
                                        stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                            </div>

                            <h1 className={styles.productName}>Adventure</h1>
                            <p className={styles.subhead}>The Scent Chemist — Signature Series</p>
                            <StarRating rating={4} />

                            <div className={styles.priceRow}>
                                <span className={styles.price}>$100</span>
                            </div>

                            <div className={styles.sizeRow}>
                                {sizes.map(s => (
                                    <button
                                        key={s}
                                        className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeBtnActive : ""}`}
                                        onClick={() => setSelectedSize(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            <div className={styles.ctaRow}>
                                <div className={styles.qtyControl}>
                                    <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                                    <span className={styles.qtyValue}>{qty}</span>
                                    <button className={styles.qtyBtn} onClick={() => setQty(q => q + 1)}>+</button>
                                </div>
                                <button
                                    className={styles.cartbtn}
                                    onClick={() => addToCart({
                                        name: "Adventure",
                                        price: 100,
                                        size: selectedSize,
                                        qty,
                                        image: thumbnails[activeThumb],
                                        subheading: "The Scent Chemist — Signature Series",
                                    })}
                                >
                                    <span className={styles.btntext}>Add to Cart</span>
                                </button>
                            </div>

                            <div className={styles.descBox}>
                                <p className={styles.desc}>
                                    A bold, adventurous fragrance that captures the untamed spirit of the open wilderness.
                                    Opening with crisp bergamot and black pepper, it settles into warm cedarwood and rich
                                    amber — perfect for the man who moves with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Perfume Notes ── */}
                <section className={styles.notesSection}>
                    <h2 className={styles.notesHeader}>Perfume Notes</h2>
                    <div className={styles.notesGrid}>

                        <div className={styles.noteCol}>
                            <div className={styles.noteIcon}>
                                <img src="src/assets/lemon.png" alt="top-notes" width={"100px"} height={"100px"}/>
                            </div>
                            <h3 className={styles.noteTitle}>Top Notes</h3>
                            <ul className={styles.noteList}>
                                <li>Bergamot</li>
                                <li>Black Pepper</li>
                                <li>Grapefruit</li>
                            </ul>
                        </div>

                        <div className={styles.noteCol}>
                            <div className={styles.noteIcon}>
                                <img src="src/assets/Patchouli_4b467e10-d67c-4e29-8f43-baa0f20012bd.png" alt="Heart Notes" width={"100px"} height={"100px"}/>
                            </div>
                            <h3 className={styles.noteTitle}>Heart Notes</h3>
                            <ul className={styles.noteList}>
                                <li>Geranium</li>
                                <li>Lavender</li>
                                <li>Cardamom</li>
                            </ul>
                        </div>

                        <div className={styles.noteCol}>
                            <div className={styles.noteIcon}>
                                <img src="src/assets/Amber_765807d4-c6af-46b2-a8b0-8798ddbb7d44.png" alt="Base Notes" width={"100px"} height={"100px"}/>
                            </div>
                            <h3 className={styles.noteTitle}>Base Notes</h3>
                            <ul className={styles.noteList}>
                                <li>Cedarwood</li>
                                <li>Amber</li>
                                <li>Musk</li>
                            </ul>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default ProductPage
