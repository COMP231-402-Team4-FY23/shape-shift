import React from 'react';
import '../App.css';

function Nutrition() {
    const handleMealPlanClick = () => {
        window.open('/mealplan');
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h1>Let's get your nutrition in check!</h1>
                    <button onClick={handleMealPlanClick}>Weekly Meal Plan</button>
                    <table></table>
                </div>
                <div className="feature-image">
                    <img src="woman-choosing-food.jpg" alt="Exercise Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Nutrition;