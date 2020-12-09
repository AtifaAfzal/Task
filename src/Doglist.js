import React from 'react';
import Dog from './Dog';
import './App.css';

const Doglist = (props) => {
    const dogsArray = props.dogs.map((dogURL,index) => {
        return{ id:index, url:dogURL, marked:false}
    })
    console.log(typeof dogsArray,"log")
    return (
        <div className="container">
             <img className="image" src={dogsArray.url}/>

        </div>
    )
}
export default Doglist;