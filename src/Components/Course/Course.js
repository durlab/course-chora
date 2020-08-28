import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus, faCheck} from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const {name, img, instructor, price, description,rating,students} = props.user;
    const handleOnClick = props.handleOnClick;
    const friendStyle = {
        display: 'flex', 
        width: '100%',
        borderBottom: '1px solid gray',
        margin: '10px 20px'
    }
    const imgStyle = {
        height:'150px', 
        marginTop: '15px',
        marginLeft: '20px',
        marginRight:'30px',
       
    }
    return (
        <div style ={friendStyle}>
           <img style={imgStyle} src={img} alt=""/>
           <div style = {{marginLeft: '40px'}}>
               <h1>{name}</h1>
                <p>{description}</p>
                <h5>Created by :  {instructor}</h5>
                <p><b>Course Price : {price} $</b></p>
                <p><b>Rating : </b><span style={{color:"yellow"}}>{rating}</span></p>
                <p><FontAwesomeIcon icon={faUserPlus}/>  <b>{students}</b></p>
                <button style={{marginBottom:'20px',padding:'5px'}} onClick={() => handleOnClick(props.user)} className="btn btn-success"> Enroll now </button>
           </div>
        </div>
    );
};

export default Course;