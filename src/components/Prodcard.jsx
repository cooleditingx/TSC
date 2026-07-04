import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/prodcard.module.css"
import { useCart } from "../context/CartContext.jsx"
import placeholderimg from "../assets/placeholder.jpg"

const options = ["100ml", "50ml"]

function Prodcard() {
    const [selected, setSelected] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)
    const comboRef = useRef(null)
    const { addToCart } = useCart()

    const handleOptionClick = (value) => {
        setSelected(value)
        setIsOpen(false)
    }

    return (
        <Link to="/product" style={{textDecoration: "none", color: "inherit"}}>
            <div className={styles.cardcon}>
                <div className={styles.imgcon}>
                    <img className={styles.img} src={placeholderimg} alt="product" />
                </div>
                <div className={styles.proddescon}>
                    <div className={styles.prodheadcon}>
                        <h3 className={styles.prodhead}>Adventure</h3>
                        <h4>$100</h4>
                    </div>
                    <p className={styles.proddes}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut possimus ullam placeat? Ex libero harum amet ea fugit quisquam.
                    </p>
                    <div className={styles.prodinfocon}>
                        <div className={styles.prodcta}>
                            <div className={styles.selectbox} onClick={e => e.preventDefault()}>
                                <div
                                    className={styles.selectboxCombo}
                                    tabIndex={0}
                                    ref={comboRef}
                                    onClick={(e) => { e.preventDefault(); setIsOpen(o => !o) }}
                                    onBlur={() => setIsOpen(false)}
                                >
                                    {selected}
                                </div>
                                {isOpen && (
                                    <div className={styles.selectboxList}>
                                        {options.map(opt => (
                                            <div
                                                key={opt}
                                                className={`${styles.selectboxOption} ${opt === selected ? styles.selectboxOptionActive : ""}`}
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={(e) => { e.preventDefault(); handleOptionClick(opt) }}
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button type="button" className={styles.cartbtn} onClick={e => {
                                e.preventDefault()
                                addToCart({
                                    name: "Adventure",
                                    price: 100,
                                    size: selected,
                                    qty: 1,
                                    image: {placeholderimg},
                                    subheading: "The Scent Chemist — Signature Series",
                                })
                            }}>
                            <span className={styles.btntext}>Add Item</span>
                            <span className={styles.btnicon}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className={styles.svg}><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Prodcard
