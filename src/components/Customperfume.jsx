import { useState } from 'react';
import styles from '../styles/customperfume.module.css';
import { useCart } from '../context/CartContext.jsx';

const OPTIONS = {
  brand: ['Armani', 'Byredo', 'Le Labo', 'Chanel', 'Dior', 'Tom Ford'],
  family: ['Floral', 'Woody', 'Citrus', 'Oriental', 'Fresh', 'Aquatic'],
  scent: ['Rose', 'Oud', 'Sandalwood', 'Bergamot', 'Jasmine', 'Vanilla'],
};

const LABELS = {
  brand: 'Choose the Brand',
  family: 'Choose the Family',
  scent: 'Choose the Scent',
};

function Customperfume() {
  const [activePopup, setActivePopup] = useState(null);
  const [selections, setSelections] = useState({ brand: '', family: '', scent: '' });
  const [tempSelection, setTempSelection] = useState('');
  const { addToCart } = useCart();

  const isComplete = selections.brand && selections.family && selections.scent;

  const handleAddToCart = () => {
    if (!isComplete) return;
    addToCart({
      name: 'Custom Blend',
      price: 150,
      size: '100ml',
      qty: 1,
      image: '../src/assets/placeholder.jpg',
      subheading: `${selections.brand} · ${selections.family} · ${selections.scent}`,
    });
  };

  const openPopup = (key) => {
    setTempSelection(selections[key] || OPTIONS[key][0]);
    setActivePopup(key);
  };

  const confirmSelection = () => {
    setSelections(prev => ({ ...prev, [activePopup]: tempSelection }));
    setActivePopup(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>Create your own scent</div>
      <div className={styles.subheading}>From the top to bottom your unique style</div>

      <div className={styles.bottleWrapper}>
        <div className={styles.cap}>
          <div className={styles.capCircle}></div>
        </div>
        <div className={styles.neck}></div>
        <div className={styles.bottleBody}>
          <svg width="360" height="380" viewBox="0 0 360 480" className={styles.bottleSvg}>
            <defs>
              <clipPath id="bottleClip"><rect x="2" y="2" width="356" height="476" rx="30" ry="30" /></clipPath>
            </defs>
            <g clipPath="url(#bottleClip)">
              <path d="M-12 -12 H372 V160 H358 C 298 176 238 144 180 160 C 122 176 62 144 2 160 H-12 Z" fill="#dfe2d6" />
              <path d="M-12 160 H2 C 62 144 122 176 180 160 C 238 144 298 176 358 160 H372 V320 H358 C 298 336 238 304 180 320 C 122 336 62 304 2 320 H-12 Z" fill="#ecdfb8" />
              <path d="M-12 320 H2 C 62 304 122 336 180 320 C 238 304 298 336 358 320 H372 V492 H-12 Z" fill="#ccd2c1" />
              <path d="M2 160 C 62 144 122 176 180 160 C 238 144 298 176 358 160" fill="none" stroke="#1a1a1a" strokeWidth="2" />
              <path d="M2 320 C 62 304 122 336 180 320 C 238 304 298 336 358 320" fill="none" stroke="#1a1a1a" strokeWidth="2" />
            </g>
            <rect x="2" y="2" width="356" height="476" rx="30" ry="30" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
          </svg>
          <div className={styles.labelsContainer}>
            <button type="button" className={styles.labelSection} onClick={() => openPopup('brand')}>
              <div className={styles.labelNumber}>01</div>
              <div className={styles.labelTitle}>Choose the Brand</div>
              <div className={styles.labelSubtitle}>{selections.brand}</div>
            </button>
            <button type="button" className={styles.labelSection} onClick={() => openPopup('family')}>
              <div className={styles.labelNumberGold}>02</div>
              <div className={styles.labelTitle}>Choose the Family</div>
              <div className={styles.labelSubtitleGold}>{selections.family}</div>
            </button>
            <button type="button" className={styles.labelSection} onClick={() => openPopup('scent')}>
              <div className={styles.labelNumber}>03</div>
              <div className={styles.labelTitle}>Choose the Scent</div>
              <div className={styles.labelSubtitle}>{selections.scent}</div>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.button}
          disabled={!isComplete}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {activePopup && (
        <div className={styles.popupOverlay} onClick={() => setActivePopup(null)}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <div className={styles.popupTitle}>{LABELS[activePopup]}</div>
            <select
              className={styles.popupSelect}
              value={tempSelection}
              onChange={e => setTempSelection(e.target.value)}
            >
              {OPTIONS[activePopup].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <button type="button" className={styles.popupConfirm} onClick={confirmSelection}>
              Select Selection
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Customperfume;
