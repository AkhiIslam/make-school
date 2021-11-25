import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css'

const Teacher = (props) => {
    console.log(props.teacher)

    const { name, img, age, salary, subject, experience } = props.teacher;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="teacher-div">
            <div>
                <img className="img-size" src={img} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Subject: {subject}</p>
                <p>Experience: {experience}</p>
                <h4>Salary: {salary}</h4>
                <button onClick={() => props.handleAddToCart(props)} className="btn-regular">{cartIcon} add to cart</button>

            </div>

        </div>
    )
}

export default Teacher;