import React, { useState } from 'react';
import {truncate} from 'lodash';
import Modal from './Modal';

export default function Manga(props){
    const [modalOpen, setModalOpen] = useState(false);
    // truncate(text, {length : 20, omission : '...'})
    // {props.descp}

    return(
        <>
            <section className="manga"           
                onClick={() => {
                setModalOpen(true);
                }}
            >
                <img src={props.poster} alt={props.title} />
                <h6>{props.title}</h6>
                <p>⭐⭐⭐⭐⭐</p>
                <ul className="genres">
                    {props.genres.map((genre,index)=>
                    <li className="genre" key={index}>{genre}</li>
                    )}
                </ul>
                <p className='descp'>{truncate(props.descp, {length : 200, omission : '...'})}</p>
            </section>

            {
                modalOpen 
                && 
                <Modal
                    modalClose={setModalOpen}
                    poster={props.poster} 
                    title={props.title} 
                    genres={props.genres} 
                    descp={props.descp}
                />
            }
        </>
    );
}