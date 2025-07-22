import React, {useState} from 'react';
import './topRatedSeries.css';

const TopRatedSeries = () => {
  const [movies, setMovies] = useState('');

  const handleChange = (e) =>{
    setMovies(e.target.value)
  }
  return (
    <div>
      <h2>Top Rated Series</h2>
      <h3>Click below to </h3>
      <form className='radio-form'>
        <div>
        <input type="radio" name="movies" id="GOT" value='GOT' onChange={handleChange}  />
        <label htmlFor="GOT">Game Of Thrones</label>
        </div>
      <div>
      <input type="radio" name="movies" id="OISTNB" value='OISTNB' onChange={handleChange}  />
      <label htmlFor="OISTNB">Orange is the new black</label>
      </div>
        <div>
        <input type="radio" name="movies" id="orphanBlack" value='Orphan Black' onChange={handleChange}  />
        <label htmlFor="orphanBlack">Orphan Black</label>
        </div>
        <div>
        <input type="radio" name="movies" id="vampDiaries" value='Vampire Diaries' onChange={handleChange}  />
        <label htmlFor="vampDiaries">Vampire Diaries</label>
        </div>
        <div>{movies}</div>
        <button className='radio-form-button' type='submit'>Vote</button>
      </form>
    </div>
  )
}

export default TopRatedSeries