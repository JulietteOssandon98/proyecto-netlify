import React from 'react'
import "./styles.css"

export const Cart = () => {
    return (
        <div className="zone purple grid-wrapper cardbajar">
        <div className="card zone">
            <img src={require("../assets/img/beach-buildings-city-clouds-412681.jpg")} alt="Cordillera" />
            <div className="text">
                <h2>Cordillera</h2>
                <button>Cotizar</button>
            </div>
        </div>
        <div className="card zone">
            <img src={require("../assets/img/group-of-person-walking-in-mountain-1365425.jpg")} alt="Florianopolis" />
            <div className="text">
                <h2>Florianópolis</h2>
                <button>Cotizar</button>
            </div>
        </div>
        <div className="card zone">
            <img src={require("../assets/img/photo-of-castle-during-daytime-3411135.jpg")} alt="Hawaii" />
            <div className="text">
                <h2>Hawaii</h2>
                <button>Cotizar</button>
            </div>
        </div>
    </div>
    )
}
