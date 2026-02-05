import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
})

export const metadata = {
    title: 'Nhà may KIM ĐÍNH - Thời Trang Áo Dài & Công Sở',
    description: 'Chuyên may đo áo dài truyền thống, cách tân và đầm váy công sở cao cấp. Thiết kế độc quyền, chất liệu thượng hạng.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi" className={`${playfair.variable} ${lato.variable}`}>
            <body>
                <Navbar />
                <main style={{ minHeight: '80vh' }}>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
