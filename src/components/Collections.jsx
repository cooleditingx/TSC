import styles from "../styles/collection.module.css";
import menImg from "../assets/mencollection.png";
import womenImg from "../assets/womencollection.png";
function Collections (){
    return (
        <>
            <div className={styles.section}>
                <h1 className={styles.collectionheader}>Collections</h1>
                <div className={styles.cardContainer}>

                    {/* Top-left — Men photo card */}
                    <div className={`${styles.card} ${styles.mencard}`}>
                        <img src={menImg} alt="Men Collection" className={styles.cardImg} />
                        <div className={styles.cardOverlay}>
                            <div className={styles.cardLinks}>
                                <a href="#">Shop all Men's</a>
                                <a href="#">Best sellers</a>
                                <a href="#">New Arrivals</a>
                                <a href="#">Gift sets</a>
                                <a href="#">Clearance</a>
                            </div>
                        </div>
                    </div>

                    {/* Top-right — plain container */}
                    <div className={`${styles.head} ${styles.womenempty}`}>
                        <h1 className={styles.header}>Women Collection</h1>
                    </div>

                    {/* Bottom-left — plain container */}
                    <div className={`${styles.head} ${styles.menempty}`}>
                            <h1 className={styles.header}>Men Collection</h1>
                    </div>

                    {/* Bottom-right — Women photo card */}
                    <div className={`${styles.card} ${styles.womencard}`}>
                        <img src={womenImg} alt="Women Collections" className={styles.cardImg} />
                        <div className={styles.cardOverlay}>
                            <div className={styles.cardLinks}>
                                <a href="#">Shop all Women's</a>
                                <a href="#">Best sellers</a>
                                <a href="#">New Arrivals</a>
                                <a href="#">Gift sets</a>
                                <a href="#">Clearance</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Collections
