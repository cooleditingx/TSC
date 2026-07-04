import Prodcard from "./Prodcard.jsx";
import styles from "../styles/bestsellers.module.css"
import { useRef } from "react";

const cardWidth = 420

function Bestsellers (){
    const containerRef = useRef();

    const handleScroll = (delta) => {
        const el = containerRef.current
        const maxScroll = el.scrollWidth - el.clientWidth
        el.scrollLeft = Math.min(Math.max(el.scrollLeft + delta, 0), maxScroll)
    }
    return (
        <>
        <div className={styles.bestsellerssection}>
            <h1 className={styles.header}>Iconic Best Sellers</h1>
            <div className={styles.bestsellers} ref={containerRef}>
                <div className={`${styles.bestsellerscards} ${styles.snapsalign}`} >
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                    <Prodcard></Prodcard>
                </div>
            </div>
            <div className={styles.controlscon}>
                    <button onClick={()=> {handleScroll(-cardWidth)}}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ceb04e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
                        </svg>
                    </button>
                    <button onClick={()=> {handleScroll(cardWidth)}}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ceb04e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                        </svg>
                    </button>
                </div>
        </div>
        </>
    )
}
export default Bestsellers