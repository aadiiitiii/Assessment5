import React from 'react';
import axios from 'axios';
import User from './User';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[ ]
        }
    }

componentDidMount(){
    console.log(`Component is mounted on the DOM`)

    axios.get('http://localhost:8000/api/movies')
    .then(res=> this.setState({
        movies: res.data.data
    }));
   
    
}

render(){
    console.log(this.state.movies);
    return(
        <div className="container">
            <div>
            <Link className="btn-btn-primary" to="/add/movies">Add movie</Link>
            </div> 
            <div className="row">
            {
                this.state.movies.map((movie,index) => <User key={index} 
                                                  name={movie.name} 
                                                  _id ={movie._id}
                                                  selected={this.selectedProduct}/>)
            }
            </div>
           </div>
    );
    }
}