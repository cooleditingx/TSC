import styles from "../styles/CartView.module.css"
import { useCart } from "../context/CartContext.jsx"
import SamplesScreen from "./SamplesScreen.jsx"

function LineItem({ item }) {
    const { removeFromCart, updateQty } = useCart()

    return (
        <div className={styles.lineItem}>
            <div className={styles.lineItemImgWrap}>
                <img className={styles.lineItemImg} src={item.image} alt={item.name} />
            </div>
            <div className={styles.lineItemInfo}>
                <h3 className={styles.lineItemName}>{item.name}</h3>
                <p className={styles.lineItemSize}>{item.size}</p>
                <p className={styles.lineItemSub}>{item.subheading}</p>
                <div className={styles.lineItemBottomRow}>
                    <div className={styles.qtyControl}>
                        <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                            −
                        </button>
                        <span className={styles.qtyValue}>{item.qty}</span>
                        <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                            +
                        </button>
                    </div>
                    <span className={styles.lineItemPrice}>${item.price * item.qty}</span>
                </div>
            </div>
            <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                </svg>
            </button>
        </div>
    )
}

function CartView() {
    const { isCartOpen, closeCart, activeScreen, cartItems, itemCount, cartTotal, selectedSamples, openSamplesScreen } = useCart()

    return (
        <>
            {isCartOpen && <div className={styles.backdrop} onClick={closeCart} />}
            <aside className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ""}`}>
                <div className={styles.stage}>
                    <div className={`${styles.panel} ${activeScreen === "samples" ? styles.panelShiftedLeft : ""}`}>
                        <div className={styles.header}>
                            <div className={styles.headerLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l14 1l-1 7h-13" />
                                </svg>
                                <h2 className={styles.headerTitle}>Bag ({itemCount})</h2>
                            </div>
                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={closeCart}
                                aria-label="Close cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.body}>
                            {cartItems.length === 0 ? (
                                <p className={styles.emptyState}>Your bag is empty.</p>
                            ) : (
                                cartItems.map(item => <LineItem key={item.id} item={item} />)
                            )}

                            <div className={styles.samplesTeaser}>
                                <div className={styles.samplesBoxRow}>
                                    {[0, 1, 2].map(i => {
                                        const sample = selectedSamples[i]
                                        return sample ? (
                                            <div
                                                key={sample.id}
                                                className={styles.sampleFilledBox}
                                                onClick={openSamplesScreen}
                                            >
                                                <img src="src/assets/sample.png" alt={sample.name} className={styles.sampleFilledImg} />
                                            </div>
                                        ) : (
                                            <div key={i} className={styles.samplesPlusBox} onClick={openSamplesScreen}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className={styles.samplesTeaserText}>
                                    {selectedSamples.length > 0
                                        ? `${selectedSamples.length} of 3 samples selected`
                                        : "Select up to 3 complimentary samples"}
                                </p>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.bagTotalRow}>
                                <span className={styles.bagTotalLabel}>Bag total</span>
                                <span className={styles.bagTotalValue}>${cartTotal}</span>
                            </div>
                            <button type="button" className={styles.checkoutBtn}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.panel} ${styles.samplesPanel} ${activeScreen === "samples" ? styles.panelIn : ""}`}>
                        <SamplesScreen />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default CartView
