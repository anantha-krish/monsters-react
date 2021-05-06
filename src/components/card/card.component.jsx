import React from 'react'
import "./card.component.css";
const Card = ({data}) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${data.id}?set=set2&size=180x180`}/>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
        </div>
    )
}

export default Card
