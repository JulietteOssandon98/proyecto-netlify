import React from 'react'
import "./styles.css"

export const Navbar = () => {
    return (
        <nav className="zone pink sticky">
        <ul className="main-nav">
            <li className="oscurecer">Vuelos</li>
            <li className="oscurecer">Cruceros</li>
            <li className="oscurecer">Hoteles</li>
            <li className="oscurecer">Ofertas</li>
            <li className="push oscurecer">Quienes somos</li>
        </ul>
    </nav>
    )
}