import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class User extends Component {
    render(){
    console.log(this.props);
    console.log('am here')
    return (
        <div className="card" style={{width:18 +'rem'}}>
            <div className="card-body">
            <h5 className="card-title">{this.props._id}</h5>
            <p className="card-text">{this.props.name}</p>
            <Link to ={`/movie/${this.props._id}`} >Details</Link>
            </div>
        </div>
        );
    }
}