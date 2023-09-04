import React, { useState } from 'react';
import Navbar from './NavBar';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
import Arr from './Data';
import { useEffect } from 'react';
import { Routes,Link,Route,useNavigate } from 'react-router-dom';
import Details from './details'



function App() {

const [searchTitle, setSearchTitle] = useState("");

const [Data, setData] = useState(Arr)

const [rating, setRating] = useState(0)




const handleRating = (rate)=> {
setRating(rate)
}
const handleSearch = () => {
    const filteredResults = Data.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchTitle.toLowerCase());
    const ratingMatch = movie.rating >= rating;
    return titleMatch && ratingMatch;
    });
    return filteredResults;
};


function onAdd(title,description,rating) {
setData([...Data,{title:title,description:description,rating:rating}])

const filteredData = handleSearch();

} return(
<div className="/App">

<Routes>
       <Route path='/Add' element={<Navbar onAdd={onAdd} />}/>
      <Route path='/'  
         element={<div className="prt">
         <div className="search-container">
         <input placeholder='search app' onChange={(e)=>setSearchTitle(e.target.value)}/>
         <Rating onClick={handleRating} ratingValue={rating}/>
         <Link to="/add" className="custom-link">
  <button className="custom-button">Next</button>
</Link>

         <MovieList info={Data.filter((el)=>el.title.toLowerCase().includes(searchTitle.toLowerCase())&&el.rating>=rating)}/> 
        </div>
         </div>} />

<Route path='/details/:x'  element={<Details info={Data}  />}/>
</Routes>
</div> 

);

}
export default App;