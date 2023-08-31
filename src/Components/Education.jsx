import React from "react";

const description =
  "I'm a Junior at Fresno State Univerity hopefully compeleting my B.A. in Fall 2024.";
const Education = () => {
    return (
        <section className="light" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <p className="large">{description}</p>
        </section>
    );
}

export default Education;