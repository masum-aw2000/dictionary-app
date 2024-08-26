/* eslint-disable react/prop-types */
// src/components/Definition.jsx

const Definition = ({ definition }) => {
    return (
        <div className='meaning-items'>
            <li className='item'>
                <p>{definition.definition}</p>
                {definition.example && <p><i>Example: {definition.example}</i></p>}
            </li>

        </div>

    )
}

export default Definition;