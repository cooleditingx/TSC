import styles from "../styles/hero.module.css"

function Hero (){
    return (
        <>
        <div className={styles.imgcon}>
            <div className={styles.imgwrapper}>
                <img className={styles.heroimg} src="/assets/hero.png" alt="hero img" />
            </div>
        </div>
        </>
    )
}
export default Hero