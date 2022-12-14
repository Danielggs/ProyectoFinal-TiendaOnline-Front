import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import './card.css'
import { addCart } from '../Redux/actions';


const Card = ({data}) => {

  const dispatch = useDispatch()
  
  const onClick = (e)=>{
    dispatch(addCart (data))
  }
  const [stars,setStars]=useState(0);
  useEffect(()=>{
    var sum=0;
    var cont=0;
    Object.keys(data.rate).map((e)=>{
      sum+=data.rate[e];
      cont++;
    })
    console.log(sum/cont);
    setStars(cont>0?sum/cont:1)
  },[data])

  console.log(data)

  return (
    <div className="container3">
  <div className="card">
    <div className="imgBx">
      <img src={data.image}/>
    </div>
    <div className="contentBx">
      <h2>{data.name}</h2>
      <img src={stars<1?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'}/>
      <img src={stars<2?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'}/>
      <img src={stars<3?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'}/>
      <img src={stars<4?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'}/>
      <img src={stars<5?'https://upload.wikimedia.org/wikipedia/commons/archive/b/b0/20120722205312%21Star-.svg':'https://upload.wikimedia.org/wikipedia/commons/archive/6/63/20070316213818%21Star%2A.svg'}/>
      <div className="size">
        <h3>Stock :</h3>
        {
          Object.keys(data.stock).map((e)=>{
            return <h3>{e}:{data.stock[e]}</h3>;
          })
        }

        
      </div>
       <div className="color">
        <h3>Precio : {data.price}</h3>
      </div> 
      <button onClick={onClick}>   <AiOutlineShoppingCart  /> agregar al Carrito</button>
    </div>
  </div>
</div>
  )
}

export default Card