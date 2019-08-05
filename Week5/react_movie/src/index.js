import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Movies from './components/Movies'
import About from './components/About'
import MovieDetails from './components/MovieDetails'
import DeleteMovie from './components/DeleteMovie';
import Add from './components/Add';

const router = (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies List</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>

        <div>
            <Route path="/" component={App}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/about" component={About}/>
            <Route exact path="/movie/:id" component={MovieDetails}/>
            <Route exact path="/movie/delete/:id" component={DeleteMovie}/>
            <Route exact path="/add/movies" component={Add}/>
        </div>
    </Router>
)

ReactDOM.render(
    router, 
    document.getElementById('root'));