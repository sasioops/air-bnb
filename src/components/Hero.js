import React from "react";
import photo from '../images/photo-grid.png';

export default function Hero() {
    return (
        <section className="hero">
            <img className="photo-grid" src={photo} alt="A collage of different sports"  />
            <h1 className="hero-header" >
                Online experinces
            </h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>

        </section>
    )
}