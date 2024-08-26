/* eslint-disable react/prop-types */
// responsible for rendering word data, putting components together
import Word from './Word';
import Definition from './Definition';
import Phonetic from './Phonetic';
import PartOfSpeech from './PartOfSpeech';
import Synonym from './Synonym';
import Antonym from './Antonym';




const WordData = ({ wordData }) => {
    const phoneticWithAudio = wordData.phonetics.find(p => p.audio);
    const phoneticWithoutAudio = wordData.phonetics.find(p => p.text);
    const phonetic = phoneticWithAudio || phoneticWithoutAudio;

    return (
        <div>
            <div className="word-phonetic-container">
                <Word word={wordData.word} />
                {phonetic && <Phonetic phonetic={phonetic} />}
            </div>
            {/* Render meanings */}
            {wordData.meanings.map((meaning, index) => (
                <div key={index}>
                    <PartOfSpeech partOfSpeech={meaning.partOfSpeech} />
                    {/* Render definitions */}
                    <h2 className='meaning'>Meaning</h2>
                    <ul className="definition-list">
                        {meaning.definitions.map((definition, defIndex) => (
                            <Definition key={defIndex} definition={definition} />
                        ))}
                    </ul>
                    {meaning.synonyms.length > 0 && <Synonym synonyms={meaning.synonyms} />}
                    {meaning.antonyms.length > 0 && <Antonym antonyms={meaning.antonyms} />}
                </div>
            ))}
        </div>
    );
}

export default WordData;

