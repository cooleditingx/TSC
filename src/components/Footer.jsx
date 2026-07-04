import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>

            {/* ── Top bar ── */}
            <div className={styles.topBar}>
                {/* <span className={styles.topTag}>Handcrafted with Passion</span> */}
                <h1 className={styles.brandName}>TSC</h1>
                {/* <span className={styles.topTag}>Premium Fragrances</span> */}
            </div>

            {/* ── Main body ── */}
            <div className={styles.mainBody}>

                {/* Quote */}
                <div className={styles.quoteBlock}>
                    <p className={styles.quote}>
                        "A scent is the most powerful trigger of memory — it bypasses logic and speaks directly to the soul."
                    </p>
                </div>

                {/* Nav columns */}
                <nav className={styles.navColumns}>
                    <ul className={styles.navCol}>
                        <li><a href="#">Shop All</a></li>
                        <li><a href="#">Men's Collection</a></li>
                        <li><a href="#">Women's Collection</a></li>
                        <li><a href="#">Unisex</a></li>
                        <li><a href="#">Gift Sets</a></li>
                        <li><a href="#">Bestsellers</a></li>
                    </ul>
                    <ul className={styles.navCol}>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Ingredients</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Wholesale</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* ── Social icons ── */}
            <div className={styles.social}>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="X / Twitter">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                </a>
            </div>

            {/* ── Divider ── */}
            <div className={styles.divider} />

            {/* ── Bottom bar ── */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomCell}>
                    <span>© 2026 TSC</span>
                    <span>All Rights Reserved</span>
                </div>
                <div className={`${styles.bottomCell} ${styles.bottomCellCenter}`}>
                    <span>Dubai, UAE</span>
                    <span>hello@tsc.com</span>
                </div>
                <div className={`${styles.bottomCell} ${styles.bottomCellRight}`}>
                    <span>Crafted with Intention</span>
                    <span>Worn with Confidence</span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
