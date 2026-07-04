import styles from "../styles/SamplesScreen.module.css"
import { useCart } from "../context/CartContext.jsx"
import { SAMPLE_CATALOG } from "../data/sampleCatalog.js"

function SamplesScreen() {
    const { draftSamples, toggleDraftSample, backToCart, confirmSamples } = useCart()

    return (
        <>
            <div className={styles.header}>
                <button
                    type="button"
                    className={styles.backBtn}
                    onClick={backToCart}
                    aria-label="Back to cart"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </button>
                <h2 className={styles.headerTitle}>Select up to 3 samples</h2>
            </div>

            <div className={styles.body}>
                {SAMPLE_CATALOG.map(sample => {
                    const isSelected = draftSamples.some(s => s.id === sample.id)
                    const isDisabled = !isSelected && draftSamples.length >= 3
                    return (
                        <div
                            key={sample.id}
                            className={`${styles.sampleCard} ${isDisabled ? styles.sampleCardDisabled : ""}`}
                            onClick={() => toggleDraftSample(sample)}
                        >
                            <div className={styles.sampleImgWrap}>
                                <img className={styles.sampleImg} src={sample.image} alt={sample.name} />
                                <span className={`${styles.checkToggle} ${isSelected ? styles.checkToggleActive : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                            </div>
                            <h3 className={styles.sampleName}>{sample.name}</h3>
                            <p className={styles.sampleSize}>{sample.size}</p>
                        </div>
                    )
                })}
            </div>

            <div className={styles.footer}>
                <button type="button" className={styles.confirmBtn} onClick={confirmSamples}>
                    Add Selected Samples ({draftSamples.length}/3)
                </button>
            </div>
        </>
    )
}

export default SamplesScreen
