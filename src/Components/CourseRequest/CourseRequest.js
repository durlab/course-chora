import React from 'react';
import './CourseRequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus, faCheck} from '@fortawesome/free-solid-svg-icons'

const CourseRequest = (props) => {
    const {name, price, img} = props.request;
    return (
        <div>
            <div className='body'>
                <img style = {{height:'60px'}}src={img} alt=""/>
                <div className="requestItem">
                    <h5>{name}</h5>
                   
                    <p><b>price: {price}</b></p>
                </div>
                <div className = 'button' style={{width:'25%'}}>
                    <button className="btn btn-success">Enrolled <FontAwesomeIcon icon={faCheck}/></button>
                </div>
            </div>
        </div>
    );
};

export default CourseRequest;