import { useState, useRef, useEffect } from "react";
import styles from "../styles/Samples.module.css";
import placeholderImg from "../assets/sample.png";
import { SAMPLE_CATALOG } from "../data/sampleCatalog.js";
import { useCart } from "../context/CartContext.jsx";

const CARD_LABELS = ["first sample", "second sample", "third sample"];

function SampleCard({ label, selected, onSelect, onReset }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option) {
    onSelect(option);
    setDropdownOpen(false);
  }

  function handleReset() {
    onReset();
    setDropdownOpen(false);
  }

  return (
    <div className={`${styles.card} ${selected ? styles.cardSelected : ""}`}>
      {selected && (
        <button className={styles.deleteBtn} onClick={handleReset} aria-label="Remove selection">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
          </svg>
        </button>
      )}

      {selected ? (
        <div className={styles.selectedContent}>
          <img src={placeholderImg} className={styles.bottleImg} alt="Sample bottle" />
          <span className={styles.selectedName}>{selected}</span>
        </div>
      ) : (
        <div className={styles.selectWrapper} ref={wrapperRef}>
          <button
            className={styles.selectBtn}
            onClick={() => setDropdownOpen((o) => !o)}
          >
            Select {label}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              {SAMPLE_CATALOG.map((opt) => (
                <li key={opt.id} className={styles.dropdownItem} onClick={() => handleSelect(opt.name)}>
                  {opt.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const FILTER_LABELS = ["Men", "Women", "Unisex"];

function Samples() {
  const [activeFilter, setActiveFilter] = useState("Men");
  const [selections, setSelections] = useState([null, null, null]);
  const { addToCart } = useCart();

  function updateSelection(index, name) {
    setSelections((current) => current.map((s, i) => (i === index ? name : s)));
  }

  function handleAddToCart() {
    const chosen = selections.filter(Boolean);
    addToCart({
      name: "Sample Set",
      price: 0,
      size: `${chosen.length} Samples`,
      qty: 1,
      image: placeholderImg,
      subheading: chosen.join(", "),
    });
  }

  const hasSelection = selections.some(Boolean);

  return (
    <div className={styles.samplescon}>
      <h1 className={styles.sampleheader}>Try Our Free Samples Set</h1>
      <div className={styles.filterGroup}>
        {FILTER_LABELS.map((label) => (
          <button
            key={label}
            className={`${styles.filterBtn} ${activeFilter === label ? styles.filterBtnActive : ""}`}
            onClick={() => setActiveFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.cardsContainer}>
        {CARD_LABELS.map((label, i) => (
          <SampleCard
            key={label}
            label={label}
            selected={selections[i]}
            onSelect={(name) => updateSelection(i, name)}
            onReset={() => updateSelection(i, null)}
          />
        ))}
      </div>
      <div className={styles.addToCartContainer}>
        <button
          type="button"
          className={styles.addToCartBtn}
          disabled={!hasSelection}
          onClick={handleAddToCart}
        >
          Add Samples to Cart
        </button>
      </div>
    </div>
  );
}

export default Samples;
