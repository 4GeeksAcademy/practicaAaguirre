//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { Pokemons } from "./component/pokemons";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Pokemons/>);

