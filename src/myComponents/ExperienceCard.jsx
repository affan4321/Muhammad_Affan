import React from 'react';
import "./ExperienceCard.css";

function ExperienceCard({details}) {
  return (
    <section>
        <div className="expcard-container">
            <h6>{details.title}</h6>
            <h6>{details.date}</h6>

            <div className="expcard-content">
                <ul>
                    {
                    details.responsibilities.map((item) => {
                        return(
                        <li key={item}>{item}</li>   
                    )})
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ExperienceCard
