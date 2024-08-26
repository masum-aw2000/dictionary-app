/* eslint-disable react/prop-types */
// src/components/Synonym.jsx

const Synonym = ({synonyms}) => {
    return (
        <div className="side-by-side">
            <h3 className="meaning">Synonyms</h3>
            <ul className="synonym-antonym">
                {synonyms.map((synonym, index) => (
                    <li key={index}>{synonym}</li>
                ))}
            </ul>
        </div>
    )
}

export default Synonym;