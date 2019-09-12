import React from 'react';


const Card = props => {
    return(
        <div className='card' key={props.length}>
            <img src={props.info.url} alt=''/>
            <h2>{props.info.title}</h2>
            <p>{props.info.explanation}</p>
            <small>{props.info.copyright}{props.info.date}</small>
            <a href={props.info.hdurl}>HD Link</a>
        </div>
    )
}
export default Card;