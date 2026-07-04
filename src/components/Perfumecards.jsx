import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/perfumecards.module.css"
import { useCart } from "../context/CartContext.jsx"
import placeholderimg from "../assets/placeholder.jpg"
function Perfumescards(props){
    const [size, setSize] = useState("50ml")
    const { addToCart } = useCart()
    return (
        <Link to="/product" style={{textDecoration: "none", color: props.color, all: "none"}}>
            <div className={styles.cardcon} style={{backgroundColor: props.bgcolor}}>
                <div className={styles.imgcon}>
                    <img className={styles.img} src={placeholderimg} alt="product" />
                </div>
                <div className={styles.prodhead}>
                    <h3 className={styles.prodhead} style={{color: props.color}}>Adventure</h3>
                    <h4 style={{color: props.cardcolor}}>$100 </h4>
                </div>
                    <div className={styles.prodcta} >
                        <select
                            name="quantity"
                            id={styles.quantity}
                            style={{borderColor: props.color, color: props.color}}
                            value={size}
                            onClick={e => e.preventDefault()}
                            onChange={e => setSize(e.target.value)}
                        >
                            <option value="50ml">50ml</option>
                            <option value="100ml">100ml</option>
                        </select>
                        <button type="button" className={styles.cartbtn} style={{backgroundColor: props.cardcolor}} onClick={e => {
                            e.preventDefault()
                            addToCart({
                                name: "Adventure",
                                price: 100,
                                size,
                                qty: 1,
                                image: placeholderimg,
                                subheading: "The Scent Chemist — Signature Series",
                            })
                        }}>
                        <span className={styles.btntext} style={{color: props.btncolor}}>Add to Cart</span>
                        <span className={styles.btnicon}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className={styles.svg}><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    </div>
            </div>
        </Link>
    )
}
export default Perfumescards
