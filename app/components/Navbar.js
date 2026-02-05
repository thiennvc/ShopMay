'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Link href="/" className={styles.logo} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '8px', lineHeight: 1 }}>
                    <span style={{ fontSize: '1rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'none', marginBottom: '4px' }}>Nhà may</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', color: '#E91E63' }}>KIM ĐÍNH</span>
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.desktopMenu}>
                    {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                                {item === 'Contact' ? 'Liên hệ' : item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className={styles.mobileLink}
                            >
                                {item === 'Contact' ? 'Liên hệ' : item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
