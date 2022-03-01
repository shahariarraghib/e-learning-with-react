import React from 'react';
import './Courses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    // console.log(props.shopData)
    const element = <FontAwesomeIcon icon={faCartShopping} />
     const{img, courseDuration, courseInstruction, courseName, courseStart, enrollmentFee} = props.shopData
    return (

<div className='course-style'>
        <div className='image-size'>
            <img src={img} alt="" />
        </div>
        <div>
            <h2>{courseName}</h2>
            <h4>Course Instruction: By {courseInstruction}</h4>
            <p>Course Start: {courseStart}</p>
            <p>Course Duration: {courseDuration}</p>
            <p>Enrollment Fee:${enrollmentFee}</p>
            <button 
            onClick={ () => props.handleAddToCart(props.shopData)}
            className='button-style'>{element}Enroll Now</button>
        </div>
        </div>

    );
};

export default Courses;