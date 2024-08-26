
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import './index.css'
import WordData from './components/WordData';
import SearchBar from './components/SearchBar';

function App() {
  const [wordData, setWordData] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  // api GET request
  const fetchWordData = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try {
      const response = await axios.get(url);
      setWordData(response.data[0]);
      setError(null);
    } catch (err) {
      setError('Word not found');
      setWordData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchWordData(query);
    }
  }

  return (
    <div className='app container'>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      {/* if we have an error, show it */}
      {error && <p>{error}</p>}
      {/* render word data if not null */}
      {wordData && <WordData wordData={wordData}/>}
    </div>
  )
}

export default App;
