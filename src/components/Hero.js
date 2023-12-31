import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';



function Hero() {
    const handleExploreClick = () => {
        window.open('/mealplan');
    };
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h1>Ready. Set.</h1>
                    <h1>Go!</h1>
                    <p>Our goal is to spark your enthusiasm for a healthier, more resilient version of yourself.</p>
                    <button onClick={handleExploreClick}>Explore</button>
                    <p>100K people have joined</p>
                    <p>Be the best version of yourself.</p>
                </div>
                <div className="feature-image">
                    <img src="exercise-illustration.png" alt="Exercise Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
