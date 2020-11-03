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
        <footer class="footer">
        <blockquote>
            <h2>Creado por Juliette Ossandón</h2>
        </blockquote>
    </footer>
      </div>
    )
  }
}

export default App
