import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./Components/Data"
import "./style.css"



export default function App() {
    
    const cards = data.map(item => {
        return (
        <Card 
        key={item.id}
        {...item}
      />
         )
    })       
    
    return (

        <div>
        
        <Navbar />
        <Hero />
        <section className="cards-list">
        
        {cards}
        </section>
        </div>

    )

}