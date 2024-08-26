/* eslint-disable react/prop-types */
// src/components/Antonym.jsx

const Antonym = ({antonyms}) => {
    return (
        <div className="side-by-side">
            <h3 className="meaning">Antonyms</h3>
            <ul className="synonym-antonym">
                {antonyms.map((antonym, index) => (
                    <li key={index}>{antonym}</li>
                ))}
            </ul>
        </div>
    )
}

export default Antonym;