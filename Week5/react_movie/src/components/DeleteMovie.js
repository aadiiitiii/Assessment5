import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class DeleteMovie extends React.Component{
    
    componentDidMount(){
        let id = this.props.match.params.id;
        Axios.delete('http://localhost:8000/api/movies/'+id)
    }
    render(){
       
        return(
            <div>
                 <h1>Deleted successfully</h1>
                 <Link className="btn-btn-primary" to="/movies">Back</Link>
            </div>
           
        )
    }
}