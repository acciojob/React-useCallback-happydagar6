import React from "react";
import "../styles/App.css";
import { useCallback, useState } from "react";
import SkillList from "./SkillList";


function UseCallbackComp() {
    const [skillsArray, setSkillsArray] = useState(["HTML", "CSS", "JavaScript", "React"]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the input value state as the user types
    }

    const handleAddSkill = () => {
        const trimmedInput = inputValue.trim(); // Remove leading and trailing whitespace
        if (trimmedInput === "" || skillsArray.includes(trimmedInput)) {
            return; // Do not add empty or duplicate skills
        }

        // Why we have used ...? Because we want to create a new array that includes all the existing skills and the new skill. The spread operator (...) allows us to do this in a concise way.
        setSkillsArray([...skillsArray, trimmedInput]); // Add the new skill to the skills array
        setInputValue(""); // Clear the input field after adding the skill
    }

    const handleDeleteSkill = useCallback((skillToRemove) => {
        setSkillsArray((currentSkillsList) => {
            return currentSkillsList.filter((skillItem) => skillItem !== skillToRemove); // Remove the specified skill from the skills array
        })
    }, []); // The empty dependency array ensures that the function is only created once and does not change on re-renders, which can help with performance when passing this function down to child components.


    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1 id="heading">Skills Tracker</h1>

            <div style={{marginBottom: "20px" }}>
                <input
                    type="text"
                    id="skill-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a new skill"
                    />
                    <button id="skill-add-btn" onClick={handleAddSkill} style={{ marginLeft: "10px" }}>
                        Add Skill
                    </button>
            </div>
            <SkillList 
                skillsList={skillsArray}
                onRemoveSkill={handleDeleteSkill}
            />
        </div>
    )


}

export default function App() {
    return <UseCallbackComp />;
}