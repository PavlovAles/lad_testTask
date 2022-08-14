import React from "react";
import Hero from "./Hero";

export default function Monster({ maxHealth, name, imageName, moves, onMove }) {
    
    return (
        <Hero maxHealth={maxHealth} name={name} imageName={imageName} moves={moves}/>
    )
}