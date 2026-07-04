import styles from "../styles/hero.module.css"
import heroimg from "../assets/hero.png"

function Hero (){
    return (
        <>
        <div className={styles.imgcon}>
            <div className={styles.imgwrapper}>
                <img className={styles.heroimg} src={heroimg} alt="hero img" />
            </div>
        </div>
        </>
    )
}
export default Hero