import { createContext, useContext, useMemo, useState } from "react"

const CartContext = createContext(null)

function makeId(name, size) {
    return `${name}||${size}`.toLowerCase()
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [selectedSamples, setSelectedSamples] = useState([])
    const [draftSamples, setDraftSamples] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [activeScreen, setActiveScreen] = useState("cart")

    function addToCart({ name, size, price, qty = 1, image, subheading }) {
        const id = makeId(name, size)
        setCartItems(items => {
            const existing = items.find(item => item.id === id)
            if (existing) {
                return items.map(item =>
                    item.id === id ? { ...item, qty: item.qty + qty } : item
                )
            }
            return [...items, { id, name, size, price, qty, image, subheading }]
        })
        setIsCartOpen(true)
    }

    function removeFromCart(id) {
        setCartItems(items => {
            const next = items.filter(item => item.id !== id)
            if (next.length === 0) {
                setSelectedSamples([])
                setDraftSamples([])
            }
            return next
        })
    }

    function updateQty(id, qty) {
        const nextQty = Math.max(1, qty)
        setCartItems(items =>
            items.map(item => (item.id === id ? { ...item, qty: nextQty } : item))
        )
    }

    function openCart() {
        setIsCartOpen(true)
    }

    function closeCart() {
        setIsCartOpen(false)
    }

    function toggleCart() {
        setIsCartOpen(open => !open)
    }

    function openSamplesScreen() {
        setDraftSamples(selectedSamples)
        setActiveScreen("samples")
    }

    function toggleDraftSample(sample) {
        setDraftSamples(current => {
            const isSelected = current.some(s => s.id === sample.id)
            if (isSelected) {
                return current.filter(s => s.id !== sample.id)
            }
            if (current.length >= 3) {
                return current
            }
            return [...current, sample]
        })
    }

    function backToCart() {
        setActiveScreen("cart")
    }

    function confirmSamples() {
        setSelectedSamples(draftSamples)
        setActiveScreen("cart")
    }

    const itemCount = useMemo(
        () => cartItems.reduce((count, item) => count + item.qty, 0),
        [cartItems]
    )

    const cartTotal = useMemo(
        () => cartItems.reduce((total, item) => total + item.price * item.qty, 0),
        [cartItems]
    )

    const value = {
        cartItems,
        selectedSamples,
        draftSamples,
        isCartOpen,
        activeScreen,
        itemCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQty,
        openCart,
        closeCart,
        toggleCart,
        openSamplesScreen,
        toggleDraftSample,
        backToCart,
        confirmSamples,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return ctx
}
