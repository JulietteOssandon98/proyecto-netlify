import React from 'react'
import "./styles.css"

export const Navbar = () => {
    return (
        <nav className="zone pink sticky">
        <ul className="main-nav">
            <li className="oscurecer">Viajes</li>
            <li className="oscurecer">Aventuras</li>
            <li className="oscurecer">Diversión</li>
            <li className="oscurecer">Ofertas</li>
            <li className="push oscurecer">Quienes somos</li>
        </ul>
    </nav>
    )
}