import React, { Component } from 'react';
import Doglist from './Doglist'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newData:[],
      favData:[]
    }
  }
  
  async componentDidMount() {
   const response = await fetch("https://dog.ceo/api/breeds/image/random/10")
    const data = await response.json();
    console.log(typeof data)
      console.log(data)
      const items = data.message.map((item, index) =>{
        return{id:index, dogs:item, marked:false}
      })
      this.setState({ newData:items})
     // console.log(this.state.newData)
       }
   handleFavourite (e,data){
     debugger

  let  arr= this.state.newData.map((item) =>{ 

    if (item.dogs === data.dogs) {
      if(item.marked == false){
        item.marked = true
        this.setState({ favData:[...this.state.favData,item]})
      }
      return item
    }
    return item
    })
    this.setState({newData:arr})
     
           }
    handleRemove(i){
      let favData = this.state.favData;
      favData.splice(i,1);
      this.setState({favData:favData})
      console.log('hell')

    }

  render(){
    let newData = this.state.newData ?(this.state.newData) :    ('') ;
   console.log('aa',this.state.favData)
  return(
    <div>
    <div style={{display:'flex'}}>
      <h3>Images</h3>
      {newData && newData.map((data,i) =>
      <div className={data.marked ? 'fav' :'simplediv'}>
        <img className="image" src={data.dogs} onClick={(e) => this.handleFavourite(e,data)}/>
        </div>
        )}
        </div>
       <h3>FavImages</h3>
      <div>
      {this.state.favData && this.state.favData.map((data,i) =>
      <div className='fav'>
        <img className="image" src={data.dogs} onClick={(i) => this.handleRemove(i)}/>
        </div>
        )}
      </div>
    
     
    </div>
  );
  }
  
}

export default App;
