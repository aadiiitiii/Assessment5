import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class About extends React.Component{
constructor(){
    super();
    this.state={
        users:[

        ]
    }
}

componentDidMount(){
    const _id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/movies/${_id}`)
    .then(res=> this.setState({
        users: res.data.data
    }));
}

    render(){
        return(
            <div>
                    <h1>Movie Details</h1>
                    <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <div className="card-body">
                    <h5 className="card-title">Name: {this.state.users.name}</h5>
                    <p className="card-title">Id: {this.state.users._id}</p>
                    <p className="card-title">Actor: {this.state.users.actor}</p>
                    <p className="card-title">Actress: {this.state.users.actress}</p>
                    <div>
                        <Link to ={`delete/${this.state.users._id}`} >Delete</Link>
                    </div> 
                    <div>
                    <Link className="btn-btn-primary" to="/movies">Back</Link>
                    </div>
                </div>

            </div>
        )
    }
}