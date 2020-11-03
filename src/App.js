import React, { Component } from "react"
import "./App.css"
import "./component/styles.css";
import { Navbar } from "./component/Navbar"
import { Cart } from "./component/Cart"
import { Slyder } from "./component/Slyder"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slyder/>
        <Cart />
        <footer className="footer pink">
        <p className="ultimotext">Creado por Juliette Ossandón</p>
      </footer>
      </div>
    )
  }
}

export default App
