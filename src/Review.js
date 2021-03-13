import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index,setIndex] = useState(0);
  const {id,name,job,image,text} = people[index];

  const next = ()=>{
    
    if(index === people.length-1){
      setIndex(0);
    }
    setIndex((index)=>{
      let newIndex = index+1;
      return newIndex;
    });
  }

  const previous = ()=>{
    
    if(index===0){
      setIndex(people.length-1);
    }
    setIndex((index)=>{
      let newIndex = index-1;
      return newIndex;
    });
  }

 
  const surprise = ()=>{
    let random =  Math.floor(Math.random()*people.length)
    if(index === random){
      setIndex(index+1)
    }
    setIndex(random)
  }
  
  return(
    <article className='review'>
    <div className='img-container'>
    <img src={image} alt={name} className="person-img" />
    <span className="quote-icon">
    <FaQuoteRight />
    </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
    <button className="prev-btn">
    <FaChevronLeft onClick={previous} />
    </button>
    <button className="prev-btn">
    <FaChevronRight onClick={next}/>
    </button>
    </div>
    <button onClick={surprise} className="random-btn">surprise me</button>
  
    </article>
  )
};

export default Review;
