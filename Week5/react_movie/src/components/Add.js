import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class Add extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            _id:'',
            actor:'',
            actress:''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(){
          let movie={
              name:this.state.name,
              _id:this.state._id,
              actor:this.state.actor,
              actress:this.state.actress,
              }
          Axios.post("http://localhost:8000/api/movies",movie).then(res=>{console.log(res.data)})
      }

    render(){
        return(
            <div>
                 <h1>Add movie</h1>
                 <form onSubmit={this.handleSubmit}>
                 <h4>Name : <input type="text" name="name" value={this.state.name} 
                            onChange={this.handleInputChange}></input></h4>
                 <h4>Id : <input type="text" name="_id" value={this.state._id} 
                                onChange={this.handleInputChange}></input></h4>
                 <h3 >Cast</h3>
                 <h4>Actor : <input type="text" name="actor" value={this.state.actor}
                                onChange={this.handleInputChange}></input></h4>
                 <h4>Actress : <input type="text" name="actress" value={this.state.actress}
                                onChange={this.handleInputChange}></input></h4>
                 <input type="submit" name="submit" value="SUBMIT"></input>
                 <input type="reset" name="reset" value="RESET"></input>

                 </form>
                 <Link className="btn-btn-primary" to="/movies">Back</Link>
            </div>
           
        )
    }
}