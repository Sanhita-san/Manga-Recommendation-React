import React from 'react';

function Modal(props) {
    console.log("clicked");
  return (
    <div id='modal-bg'> 
        <button onClick={()=>(props.modalClose(false))}>X</button>
        <section id='modal'>
            <img src={props.poster} alt={props.title} />
            <div>
                <h6>{props.title}</h6>
                <p>⭐⭐⭐⭐⭐</p>
                <ul className="genres">
                    {props.genres.map((genre,index)=>
                    <li className="genre" key={index}>{genre}</li>
                    )}
                </ul>
                <p className='descp'>{props.descp}</p>
            </div>
        </section>
    </div>
  )
}

export default Modal;